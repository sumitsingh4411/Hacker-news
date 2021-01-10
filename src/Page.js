import { SpaRounded } from '@material-ui/icons';
import React, { Component } from 'react';
import {
Pagination,
PaginationItem,
PaginationLink
} from "reactstrap";
import "./Page.css"

let prev  = 0;
let next  = 0;
let last  = 0;
let first = 0;
export default class SamplePagination extends Component {
   constructor() {
     super();
     this.state = {
       todos: ['1','2','3','4','5'],
       currentPage: 1,
       todosPerPage: 5,

     };
     this.handleClick = this.handleClick.bind(this);
     this.handleLastClick = this.handleLastClick.bind(this);
     this.handleFirstClick = this.handleFirstClick.bind(this);
   }

   handleClick(event) {
     event.preventDefault();
     this.setState({
       currentPage: Number(event.target.id)
     });
   }

   handleLastClick(event) {
     event.preventDefault();
     this.setState({
       currentPage:last
     });
   }
   handleFirstClick(event) {
     event.preventDefault();
     this.setState({
       currentPage:1
     });
   }
   render() {
     let { todos, currentPage, todosPerPage } = this.state;

      prev  = currentPage > 0 ? (currentPage -1) :0;
      last = todos.length ;
      next  = (last === currentPage) ?currentPage: currentPage +1;
     let pageNumbers = [];
     for (let i = 1; i <=last+1; i++) {
       pageNumbers.push(i);
     }

      return (
       <div className="page">  
             {
              pageNumbers.map((number,i) =>
              <div className="page_main" key= {i}>
              <div  active = {pageNumbers[currentPage-1] === (number) ? true : false} >
               <a onClick={this.handleClick} href={number} key={number} id={number}>
               {number}
               </a>
               </div>
              </div>
            )}
       </div>
     );
   }
 }