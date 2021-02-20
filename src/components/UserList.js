import React, { useState, useEffect } from 'react'
import Router, { useRouter } from 'next/router'

const UserList = ({ userData }) => {
  const [users, setUsers] = useState([])
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const startLoading = () => setLoading(true)
  const stopLoading = () => setLoading(false)

  // Set up user data
  useEffect(() => {
    if (userData) {
      // Error check
      if (userData.error) {
        // Handle error
      } else {
        setUsers(userData.users)
      }
    }
  }, [userData])

  // Router event handler
  useEffect(() => {
    Router.events.on('routeChangeStart', startLoading)
    Router.events.on('routeChangeComplete', stopLoading)
    return () => {
      Router.events.off('routeChangeStart', startLoading)
      Router.events.off('routeChangeComplete', stopLoading)
    }
  }, [])

  // Listen to scroll positions for loading more data on scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  const handleScroll = () => {
    // To get page offset of last user
    const lastUserLoaded = document.querySelector(
      '.user-list > .user:last-child'
    )
    if (lastUserLoaded) {
      const lastUserLoadedOffset =
        lastUserLoaded.offsetTop + lastUserLoaded.clientHeight
      const pageOffset = window.pageYOffset + window.innerHeight
      if (pageOffset > lastUserLoadedOffset) {
        // Stops loading
        /* IMPORTANT: Add !loading  */
        if (userData.curPage < userData.maxPage && !loading) {
          // Trigger fetch
          const query = router.query
          query.page = parseInt(userData.curPage) + 1
          router.push({
            pathname: router.pathname,
            query: query,
          })
        }
      }
    }
  }

  const handlClick = (userObj) => {
    return (e) =>{
      e.preventDefault()
      Router.push({
        pathname: '/user-details', 
        query: userObj
      });
    }
  }

  return (
    <>
      <ul className="user-list">
        {users.length > 0 &&
          users.map((user, i) => {
            return (
              <li className="user" key={i}>
                  <span onClick={handlClick(user)}>{user.fullName}</span>
              </li>
            )
          })}
      </ul>
      {loading && <h1>Loading ...</h1>}
    </>
  )
}

export default UserList