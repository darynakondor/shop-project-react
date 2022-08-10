// import React from "react"

// function App() {
//     return (
//         <>
//             <div className='test'>
//                 <h1>Hello world</h1>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptate possimus amet animi quia non.</p>
//             </div>
//             <div>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptate possimus amet animi quia non.</p>
//             </div>
//         </>
//     )
// }

// export default App

import React from 'react'

type Props = {
    title: string
}

const AppList = () => {
    return (
        <ul>
            <li>list item 1</li>
            <li>list item 2</li>
            <li>list item 3</li>
        </ul>
    )
}

const AppHeader = (props: Props) => {
    return <h1>Hello {props.title}</h1>
}
const App = () => {
  return (
    <>
        <AppHeader title="App.js"/>
        <AppHeader title="React.js"/>
        <AppList />
    </>
  )
}

export default App
