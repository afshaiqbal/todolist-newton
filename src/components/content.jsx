import {React,useState} from 'react'
import Tasks from './tasks'
import Sidebar from './sidebar'

 const Content = () => {
    const [selectedTab, setSelectedTab] = useState("INBOX")
    return (
        <section className="content">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
        <Tasks selectedTab={selectedTab}/>
        </section>
    )
}
export default Content