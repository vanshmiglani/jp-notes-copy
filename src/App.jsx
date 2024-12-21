import { useEffect, useState } from 'react'
import './App.css'
import logo from "/jplogo.jpeg"
import fb from "/fb.png"

function App() {

  useEffect(() => {
    const show = document.getElementById('show')
    const hide = document.getElementById('hide')
    show.addEventListener('click', () => {
      if (hide.style.display === "none") {
        hide.style.display = 'block'
        hide.className = 'opac'
      }
      else {
        hide.style.display = 'none'
      }
    })
  }, [])
  
  useEffect(()=>{
    const bar= document.getElementById('bar')
    const unlist = document.getElementById('unlist')
    bar.addEventListener('click',()=>{
      if(unlist.style.display === 'none'){
        unlist.style.display = 'block'
        unlist.className = 'order'
      }
      else{
        unlist.style.display='none'
      }
    })
  },[])


  return (
    <>
      <header>
        <nav>
          <div className="logo-container">
            <img src={logo} alt="Error" />
            <label className='logo-name'>JP WEBDEVELOPERS</label>
          </div>
          <div className="menu-container">
            <ul id='unlist'>
              <a href="https://jpwebdevelopers.in/index.php"> <li className="home">

                HOME
                <div className="border1">

                </div>
              </li>
              </a>
              <a href="https://jpwebdevelopers.in/jp-ppt.php">
                <li className="ppt">
                  PPT'S
                  <div className="border2">

                  </div>
                </li>
              </a>
              <a href="https://jpwebdevelopers.in/jp-notes.php">
                <li className="notes">
                  NOTES
                  <div className="border3">

                  </div>
                </li>
              </a>
              <a href="https://jpwebdevelopers.in/jp-programs.php">

                <li className="programs">
                  PROGRAMS
                  <div className="border4"></div>
                </li>
              </a>
              <a href="https://jpwebdevelopers.blogspot.com/">

                <li className="blog">
                  BLOGS <div className="border5"></div>
                </li>
              </a>
              <a href="https://jpwebdevelopers.in/contactus.php">

                <li className="contact">
                  CONTACT US <div className="border6"></div>
                </li>
              </a>
              <li className="demo" id='show'>
                DEMO PROJECTS <div className="border7"></div>
                <div className="hide" id='hide'>
                  MICRO TRU <br /> SHIVAM DJ MALOUT <br /> POOJA BARFI HOUSE <br /> YOUR HEALTH PARTNER
                </div>
              </li>
            </ul>
          </div>
            <div className="bars" id='bar'>
              <i class="fa-solid fa-bars responsive" ></i>
            </div>
        </nav>
      </header>
      <body>
        <div className="banner">
          <div className="bg">
            <h2>Notes</h2>
            <br />
            <p className='heading'>We Provide Handwritten notes of DSA (Data structure and Algorithm) </p>
          </div>
        </div>

        <div className="head">
          <h1>
            Data Structure and Algorithm (DSA) Notes
          </h1>
        </div>
        <div className="links">
          <a href="https://www.instagram.com/jpwebdevelopers/">jpwebdevelopers</a>
          <span className="follow">
            <a href="https://www.instagram.com/jpwebdevelopers/">
              Follow <i class="fa-brands fa-instagram"></i>
            </a>
          </span>
        </div>

        <br />
        <div className="content">
          <div className="flex">
            <div className="left">
              <h5 className='backtick font3'>
                Introduction and Definition of Data Structure

              </h5>
              <span className="para">
                Various types of Data Structure
              </span>
              <a href="https://jpwebdevelopers.in/notes/definition%20of%20ds%20and%20types.pdf">

                <div className='here'>Click Here </div>
              </a>
            </div>
            <div className="center">
              <h5 className='backtick'>
                Algorithm and Flowchart
              </h5>
              <span className="para">
                handwritten notes of
                Algorithm and Flowchart in data structure
              </span>
              <a href="https://jpwebdevelopers.in/notes/algorithm%20and%20flowchart%20in%20ds.pdf">

                <div className='here'>Click Here </div>
              </a>
            </div>
            <div className="right">
              <h5 className='backtick'>Complexity of Algorithm
              </h5>
              <span className="para">
                Space Complexity, Time Complexity
                Time and Space Trade off
              </span>
              <a href="https://jpwebdevelopers.in/notes/Algorithm%20complexity.pdf">

                <div className='here'>Click Here </div>
              </a>
            </div>
          </div>
          <br /> <div className="flex">
            <div className="left">
              <h5 className='backtick'>
                Basics Analysis on Algorithm
              </h5>
              <span className="para">Best case,Average Case
                Worst Case
              </span>
              <a href="https://jpwebdevelopers.in/notes/Basics%20analysis%20on%20algorithm.pdf">

                <div className='here'>Click Here </div>
              </a>
            </div>
            <div className="center">
              <h5 className='backtick font3'>Data and Classification of Data
              </h5>
              <span className="para">Notes of Classification of Data


              </span>
              <a href="https://jpwebdevelopers.in/notes/data%20in%20ds.pdf">

                <div className='here'>Click Here </div>
              </a>
            </div>
            <div className="right">
              <h5 className='backtick font3'>Linear and Non Linear data structure
              </h5>
              <span className="para">Array,Stack,Queue,Linked List
                Trees,Graph


              </span>
              <a href="https://jpwebdevelopers.in/notes/linear%20and%20non%20linear%20data%20structure.pdf">

                <div className='here'>Click Here </div>
              </a>
            </div>
          </div>
          <br /> <div className="flex">
            <div className="left">
              <h5 className='backtick'>Operations in data structure

              </h5>
              <span className="para">handwritten notes of
                operations in data structure


              </span>
              <a href="https://jpwebdevelopers.in/notes/operations%20on%20ds.pdf">

                <div className='here'>Click Here </div>
              </a>
            </div>
            <div className="center">
              <h5 className='backtick'>Applications of data structure

              </h5>
              <span className="para">handwritten notes of
                Applications of data structure


              </span>
              <a href="https://jpwebdevelopers.in/notes/Applications%20of%20Data%20Structure.pdf">

                <div className='here'>Click Here </div>
              </a>
            </div>
            <div className="right">
              <h5 className='backtick'>Arrays in data structure

              </h5>
              <span className="para">Definition ,
                Array Declaration
                Array represntation


              </span>
              <a href="https://jpwebdevelopers.in/notes/Array%20in%20data%20structure.pdf">

                <div className='here'>Click Here </div>
              </a>
            </div>
          </div>
          <br /> <div className="flex">
            <div className="left">
              <h5 className='backtick'>Types of Arrays in data structure
              </h5>
              <span className="para">Array Declaration, initialization,Accesing
                Memory representation of Array
                Trees,Graph


              </span>
              <a href="https://jpwebdevelopers.in/notes/Types%20of%20array%20and%20memory%20representation%20(1)%20(1).pdf">

                <div className='here'>Click Here </div>
              </a>
            </div>
            <div className="center">
              <h5 className='backtick font3'>Operations on Arrays in data structure

              </h5>
              <span className="para">Traversing,Insertion,Deletion,Sorting,Seraching

              </span>
              <a href="https://jpwebdevelopers.in/notes/Operations%20Of%20Array%20(1).pdf">

                <div className='here'>Click Here </div>
              </a>
            </div>
            <div className="right">
              <h5 className='backtick'>Linked Lists in data structure

              </h5>
              <span className="para">Introduction ,Representation and Operations of Linked Lists, Singly Linked List, Doubly Linked List, Circular Linked List

              </span>
              <a href="https://jpwebdevelopers.in/notes/linked%20list%20in%20ds.pdf">

                <div className='here'>Click Here </div>
              </a>
            </div>
          </div>
          <br /> <div className="flex">
            <div className="left">
              <h5 className='backtick '>Trees in data structure

              </h5>
              <span className="para">Introduction to Tree, Tree Terminology

              </span>
              <a href="https://jpwebdevelopers.in/notes/tree,%20tree%20terminologies.pdf">

                <div className='here'>Click Here </div>
              </a>
            </div>
            <div className="center">
              <h5 className='backtick '>Binary <br /> Tree

              </h5>
              <span className="para">Bianry Tree,Representation of Binary Tree

              </span>
              <a href="https://jpwebdevelopers.in/notes/binary%20tree.pdf">

                <div className='here'>Click Here </div>
              </a>
            </div>
            <div className="right">
              <h5 className='backtick '>Tree <br /> Traversal

              </h5>
              <span className="para">InOrder,PreOrder,PostOrder

              </span>
              <a href="https://jpwebdevelopers.in/notes/tree%20traversal.pdf">

                <div className='here'>Click Here </div>
              </a>
            </div>
          </div>
          <br /> <div className="flex">
            <div className="left">
              <h5 className='backtick font2'>
                Binary Search <br /> Tree

              </h5>
              <span className="para">Binary Search Tree in Data structure

              </span>
              <a href="https://jpwebdevelopers.in/notes/binary%20search%20tree.pdf">

                <div className='here'>Click Here </div>
              </a>
            </div>
            <div className="center">
              <h5 className='backtick font2'>
                Threaded Binary Tree

              </h5>
              <span className="para">Threaded Binary Tree in Data structure
              </span>
              <a href="https://jpwebdevelopers.in/notes/threaded%20binary%20tree.pdf">

                <div className='here'>Click Here </div>
              </a>
            </div>
            <div className="right">
              <h5 className='backtick font2'>
                AVL <br /> TREE

              </h5>
              <span className="para">AVL Tree in Data structure
              </span>
              <a href="https://jpwebdevelopers.in/notes/avl%20tree.pdf">

                <div className='here'>Click Here </div>
              </a>
            </div>
          </div>
          <br /> <div className="flex">
            <div className="left">
              <h5 className='backtick font2'>
                Graph in data structure

              </h5>
              <span className="para">Introduction, Representation to Graphs, Graph Traversals Shortest Path Algorithms
              </span>
              <a href="https://jpwebdevelopers.in/notes/graph%20in%20ds.pdf">

                <div className='here'>Click Here </div>
              </a>
            </div>
            <div className="center">
              <h5 className='backtick font2'>Spanning tree of a Graph

              </h5>
              <span className="para">Minimum Spanning tree in graph theory
              </span>
              <a href="https://jpwebdevelopers.in/notes/spanning%20tree%20and%20mst.pdf">

                <div className='here'>Click Here </div>
              </a>
            </div>
            <div className="right">
              <h5 className='backtick font2'>
                Kruskal's <br /> Algorithm

              </h5>
              <span className="para">Kruskal's Minimum Spanning Tree (MST) Algorithm in graph theory
              </span>
              <a href="https://jpwebdevelopers.in/notes/krushkal%20algorithm.pdf">

                <div className='here'>Click Here </div>
              </a>
            </div>
          </div>
          <br /> <div className="flex">
            <div className="left">
              <h5 className='backtick font2'>
                Prim's <br /> Algorithm

              </h5>
              <span className="para">Prim's Algorithm for Minimum Spanning Tree (MST) in graph theory
              </span>
              <a href="https://jpwebdevelopers.in/notes/prim%20algorithm.pdf">

                <div className='here'>Click Here </div>
              </a>
            </div>
            <div className="center">
              <h5 className='backtick font2'>
                Stack in data structure

              </h5>
              <span className="para">Stack Introduction , Structure,<b>
                Operations of Stack </b>
              </span>
              <a href="https://jpwebdevelopers.in/notes/Stack%20in%20Data%20Structure.pdf">

                <div className='here'>Click Here </div>
              </a>
            </div>
            <div className="right">
              <h5 className='backtick font2'>
                Program of Stack(PUSH,POP)

              </h5>
              <span className="para">Stack program with its operation
              </span>
              <a href="https://jpwebdevelopers.in/notes/Stack%20Program.pdf">

                <div className='here'>Click Here </div>
              </a>
            </div>
          </div>
          <br /> <div className="flex">
            <div className="left">
              <h5 className='backtick font2'>
                Stack <br />
                Errors
              </h5>
              <span className="para"><b>

                Overflow and Underflow
              </b>
              </span>
              <a href="https://jpwebdevelopers.in/notes/overflow%20and%20underflow.pdf">

                <div className='here'>Click Here </div>
              </a>
            </div>
            <div className="center">
              <h5 className='backtick font2'>
                Stack <br /> Applications
              </h5>
              <span className="para"><b>

                All applications of stack
              </b>
              </span>
              <a href="https://jpwebdevelopers.in/notes/Stack%20Applications.pdf">

                <div className='here'>Click Here </div>
              </a>
            </div>
            <div className="right">
              <h5 className='backtick font2'>
                Queue
              </h5>
              <span className="para">
                Introduction to Queue, Definition, Operations of Queue, Queue Implementation

              </span>
              <a href="https://jpwebdevelopers.in/notes/queue%20in%20data%20structure.pdf">

                <div className='here'>Click Here </div>
              </a>
            </div>
          </div>
          <br /> <div className="flex">
            <div className="left">
              <h5 className='backtick font2'>
                Types of <br /> Queue
              </h5>
              <span className="para">Circular Queue, De-queue and Priority Queue.

              </span>
              <a href="https://jpwebdevelopers.in/notes/Types%20of%20Queue%20in%20data%20structure.pdf">

                <div className='here'>Click Here </div>
              </a>
            </div>
            <div className="center">
              <h5 className='backtick font2'>
                Seraching
              </h5>
              <span className="para">Linear Search <br />
                Binary Serach

              </span>
              <a href="https://jpwebdevelopers.in/notes/searching%20in%20data%20structure.pdf">

                <div className='here'>Click Here </div>
              </a>
            </div>
            <div className="right">
              <h5 className='backtick font2'>
                Binary Serach Program
              </h5>
              <span className="para">
                Program to implement Binary Serach

              </span>
              <a href="https://jpwebdevelopers.in/notes/program%20of%20binary%20search.pdf">

                <div className='here'>Click Here </div>
              </a>
            </div>
          </div>
          <br /> <div className="flex">
            <div className="left">
              <h5 className='backtick font2'>Sorting
              </h5>
              <span className="para">selection sort

              </span>
              <a href="https://jpwebdevelopers.in/notes/selection%20sorting.pdf">

                <div className='here'>Click Here </div>
              </a>
            </div>
            <div className="center">
              <h5 className='backtick font2'>Insertion <br /> Sort
              </h5>
              <span className="para">
                Notes of Insertion sort
              </span>
              <a href="https://jpwebdevelopers.in/notes/insertion%20sort.pdf">

                <div className='here'>Click Here </div>
              </a>
            </div>
            <div className="right">
              <h5 className='backtick font2'>
                Bubble <br /> sort
              </h5>
              <span className="para">Notes of bubble sort
              </span>
              <a href="https://jpwebdevelopers.in/notes/bubble%20sort.pdf">

                <div className='here'>Click Here </div>
              </a>
            </div>
          </div>
          <br /> <div className="flex">
            <div className="left">
              <h5 className='backtick font2'>
                Merge <br /> sort
              </h5>
              <span className="para">
                Notes of Merge sort
              </span>
              <a href="https://jpwebdevelopers.in/notes/Merge_Sort_(1).pdf">

                <div className='here'>Click Here </div>
              </a>
            </div>
            <div className="center">
              <h5 className='backtick font2'>
                Merge sort Program
              </h5>
              <span className="para">
                Program to implement Merge sort algorithm
              </span>
              <a href="https://jpwebdevelopers.in/notes/program%20of%20merge%20sort.pdf">

                <div className='here'>Click Here </div>
              </a>
            </div>
            <div className="right">
              <h5 className='backtick font2'>
                Hashing
              </h5>
              <span className="para">
                Hash Function, Types of Hash Functions, Collision, Collision Resolution Technique (CRT)
              </span>
              <a href="https://jpwebdevelopers.in/notes/hashing%20in%20data%20structure.pdf">

                <div className='here'>Click Here </div>
              </a>
            </div>
          </div>
          <br /> <div className="flex">
            <div className="left">
              <h5 className='backtick font2'>
                Dijkstra <br /> Algorithm
              </h5>
              <span className="para">
                Single source shortest path Algorithm
              </span>
              <a href="https://jpwebdevelopers.in/notes/dijkastra%20algorithm.pdf">

                <div className='here'>Click Here </div>
              </a>
            </div>
            <div className="center">
              <h5 className='backtick  font2'>
                Floyd Warshal algorithm
              </h5>
              <span className="para">
                All pair shortest path Algorithm
              </span>
              <a href="https://jpwebdevelopers.in/notes/floyd%20warshall%20algorithm.pdf">

                <div className='here'>Click Here </div>
              </a>
            </div>
            <div className="right">
              <h5 className='backtick font3'>
                Program to implement Floyd Warshal <br /> algorithm
              </h5>
              <span className="para">
                CPP Program to implement Floyd Warshal algorithm
              </span>
              <a href="https://jpwebdevelopers.in/notes/program%20of%20floyd%20warshall%20algorithm.pdf">

                <div className='here'>Click Here </div>
              </a>
            </div>
          </div>
          <br /> <div className="flex2">
            <div className="left">
              <h5 className='backtick font2'>Data structure using python
              </h5>
              <span className="para">
                Programs of data structure using python
              </span>
              <a href="https://jpwebdevelopers.in/notes/DS%20using%20python.pdf">

                <div className='here'>Click Here </div>
              </a>
            </div>


          </div>
        </div>
        <br />

        <footer>
          <div className="back">
            <div className="footflex">
              <div className="parts cent">
                <img src={logo} className='images' alt="Error" />
                <div className='head'>
                  JP WebDevelopers
                  <div className="border8">

                  </div>

                </div>
                <div className="city">
                  <h3>Malout,Punjab - 152107</h3>
                </div>
                <div className="social">
                  <a href="https://www.facebook.com/people/JP-Web-Developers/100064119851004/">

                    <i class="fa-brands fa-square-facebook"></i>
                  </a>
                  <a href="https://www.instagram.com/jpwebdevelopers/">
                    <i class="fa-brands fa-instagram wet"></i>
                  </a>
                  <a href="mailto:jpdevelopers2020@gmail.com">


                    <i class="fa-solid fa-envelope alternate"></i>
                  </a>
                </div>
              </div>
              <div className="parts">
                <div className="headingnew">
                  <h2 className='mke'>Quick Links
                    <div className="border9">

                    </div>
                  </h2>
                </div>

                <div className="personal">
                  <a href="https://jpwebdevelopers.in/index.php">
                    <h4 className='make1'>
                      About Us
                      <div className="border10">

                      </div>
                    </h4>
                  </a>
                  <a href="https://jpwebdevelopers.in/index.php">
                    <h4 className='make2'>
                      Services<div className="border11">

                      </div>
                    </h4>
                  </a>
                  <a href="https://jpwebdevelopers.in/projects.php">
                    <h4 className='make3'>
                      Projects<div className="border12">

                      </div>
                    </h4>
                  </a>
                  <a href="https://jpwebdevelopers.in/contactus.php">
                    <h4 className='make4'>Contact Us<div className="border13">

                    </div></h4></a>
                </div>
              </div>
              <div className="parts">
                <div className="mke">
                  Contact Us
                  <div className="border14">

                  </div>
                </div>
                <div className="linkedin">
                  <div className="socialflex"><i class="fa-solid fa-location-dot"></i> &nbsp; &nbsp; &nbsp; <span>Patel Nagar,Malout (Punjab)</span>
                  </div>
                  <div className="socialflex">
                    <i class="fa-brands fa-whatsapp"></i> &nbsp; &nbsp; &nbsp; <span>9646471161</span>
                  </div>
                  <div className="socialflex">
                    <i class="fa-solid fa-envelope"></i>&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a className='under' href="mailto:jpdevelopers2020@gmail.com">
                      jpwebdevelopers2020@gmail.com
                    </a>
                  </div>
                  <div className="socialflex">
                    <i class="fa-regular fa-clock"></i>&nbsp; &nbsp; &nbsp; <span>Mon-Sat 10am-7pm</span>
                  </div>
                </div>
              </div>
              <div className="parts">
                <div className="mke">
                  Follow Us <div className="border15">

                  </div>
                </div>
                <div className="image">
                  <a href="https://www.instagram.com/jpwebdevelopers/">
                    <img src={fb} alt="Error" className='img' />

                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="lastThing">
            <marquee behavior="alternate" direction="">

              copyright &copy; 2020 <b> JP Web Developers.</b> All Rights Reserved
            </marquee>

          </div>
        </footer>
      </body>
    </>
  )
}

export default App
