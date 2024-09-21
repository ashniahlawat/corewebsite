import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Assuming Navbar.tsx
import Home from './components/Home'; 
import ResourceCard from './components/Resources'; // Assuming Resources.tsx
import EventCard from './components/EventCard'; // Assuming EventCard.tsx
import Footer from './components/Footer';
import Projects from './components/Projects';

import Contact from './components/Contact'
import Members from './components/Members'

import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const resources = [
  { title: "Arni's Guide to 2D Design", author: "Arnav Verma", category: "Creative", imageUrl:"https://i.ibb.co/hWwJ9GL/image.png", link:"" },
  { title: "Pranjal's Guide to 3D Design", author: "Pranjal Solanki", category: "Creative", imageUrl:"https://i.ibb.co/VqQccQD/image.png", link:"" },
  { title: "Arni's Guide to Video Editing", author: "Arnav Verma", category: "Creative", imageUrl:"https://i.ibb.co/M157p6z/image.png", link:"" },
  { title: "Katyal's Guide to Web Development", author: "Prisha Basak", category: "Development", imageUrl:"https://i.ibb.co/m6GP8b7/image.png", link:"https://www.notion.so/Katyal-s-Guide-to-Web-Development-caeb5b33ebb74151b4020bdea706cd5a?pvs=4" },

  { title: "Prisha's Guide to Machine Learning", author: "Prisha Basak", category: "Development", imageUrl:"https://i.ibb.co/vBKb8KM/image.png", link:"" },
  { title: "Katyal's Guide to App Development", author: "Arnav Katyal", category: "Development" , imageUrl:"https://i.ibb.co/bbwwhp6/image.png", link:"https://www.notion.so/Katyal-s-Guide-to-App-Development-fb6ea32d52034e54b35c6637298aee3b?pvs=4"},
  { title: "Pranjal's Guide to Game Development", author: "Pranjal", category: "Creative", imageUrl:"https://i.ibb.co/VT458w6/image.png", link:"" },
  { title: "Aatharv's Guide to Hardware", author: "Aatharv Kwatra", category: "Creative" , imageUrl:"https://i.ibb.co/M9326d7/image.png", link:"https://erratic-hisser-913.notion.site/Aatharv-s-Guide-to-Hardware-41c3c16f0bd8419a90f2fc35c183070a?pvs=25"},

  { title: "Atreyi's Guide to Linguistics", author: "Atreyi Shukla", category: "Creative" , imageUrl:"https://i.ibb.co/RBnVgY7/image.png", link:"https://scalloped-lemming-d9e.notion.site/Atreyi-s-Guide-to-Understanding-Computational-Linguistics-14a618dfc6af4d409b5ef282bad9ad56"},
  { title: "Ashni's Guide to Programming", author: "Ashni Ahlawat", category: "Development", imageUrl:"https://i.ibb.co/2PL7p0G/image.png", link:"https://ashnii.notion.site/Ashni-s-Guide-to-Competitive-Programming-cb4f4d72288f44a6af1568bf6a4fd577?pvs=4" },


  { title: "Deva's Guide to Cryptic Hunting", author: "Deva", category: "Development", imageUrl:"https://i.ibb.co/hWwJ9GL/image.png", link:"https://mixed-clave-bfe.notion.site/Deva-s-Guide-to-Cryptic-Hunting-db47d63b7bd04bbfbcb734a0553a1c22?pvs=4" },
  { title: "Deva's Guide to CTF/Hacking", author: "Deva", category: "Development", imageUrl:"https://i.ibb.co/NmdfXRP/image.png", link:"" },
  { title: "Arni's Guide to Photography", author: "Arnav Verma", category: "Creative", imageUrl:"https://i.ibb.co/xgLs2mt/image.png", link:"" },

  { title: "Atreyi's Guide to Filmmaking", author: "Atreyi Shukla", category: "Creative" , imageUrl:"https://i.ibb.co/XSHFsRm/image.png", link:""},



  { title: "Divijay's Guide to Gaming", author: "Divijay Gupta", category: "Creative", imageUrl:"https://i.ibb.co/X4L2sjQ/image.png", link:"https://torpid-danger-c6e.notion.site/62c5303e23e74404b6848c627fc0a1e6" },





  { title: "Jyotsna's Guide to Group Discussion", author: "Jyotsna Arora", category: "Development", imageUrl:"https://i.ibb.co/bWb9TGg/image.png", link:"https://mixed-clave-bfe.notion.site/Jyotsna-s-Guide-to-Group-Discussion-ca6ddf7c62144ad8ae47219010791558?pvs=4" },
  { title: "Arni's Guide to Quiz/Cross", author: "Arnav Verma", category: "Development", imageUrl:"https://i.ibb.co/M7hMvfw/image.png", link:"" },

  { title: "Urvaksh's Guide to Audio Production", author: "Urvaksh Sachdeva", category: "Development", imageUrl:"https://i.ibb.co/F7BZ2cN/image.png", link:"https://www.notion.so/Urvaksh-s-Guide-to-Audio-Production-cc8dd281d0d945eeacfd55c42b9b59c6" },
  { title: "Arni's Guide to Digital Art", author: "Arnav Verma", category: "Creative" , imageUrl:"https://i.ibb.co/nMQ4LTn/image.png", link:""},
  { title: "Jyotsna's Guide to Idea Pitching", author: "Jyotsna Arora", category: "Development", imageUrl:"https://i.ibb.co/vXPdm9h/image.png", link:"https://mixed-clave-bfe.notion.site/Jyotsna-s-Guide-to-Idea-Pitching-184ac6d6b36c4162bb0ad9e131b0ecc1?pvs=4" },
  { title: "Jyotsna's Guide to Generative AI", author: "Jyotsna Arora", category: "Development", imageUrl:"https://i.ibb.co/nM4zfzR/image.png", link:"https://mixed-clave-bfe.notion.site/Jyotsna-s-Guide-to-AI-Prompting-f926c46a8029464eb1b0a5b571c328c8?pvs=4" },
];



const App = () => {
  return (
    <Router>
      <div className="App">
        
        <Navbar />
        
        <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventCard />} />
        
          
          
          <Route path="/resources" element={
            <div className="resources">
              {resources.map((resource, index) => (
                <ResourceCard key={index} resource={resource} />
              ))}
           
            </div>
          } />
          <Route path="/members" element={<Members />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
        <Footer/>
      </div>
      
    </Router>
  );
}

export default App;
