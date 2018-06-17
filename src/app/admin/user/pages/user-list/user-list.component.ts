import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  files: TreeNode[] = [
    {
      data: {
        name: 'Documents',
        size: '75kb',
        type: 'Folder',
      },
      expanded: true,
      children: [
        {
          data: {
            name: 'Work',
            size: '55kb',
            type: 'Folder'
          },
          children: [
            {
              data: {
                name: 'Expenses.doc',
                size: '30kb',
                type: 'Document'
              }
            },
            {
              data: {
                name: 'Resume.doc',
                size: '25kb',
                type: 'Resume'
              }
            }
          ]
        },
        {
          data: {
            name: 'Home',
            size: '20kb',
            type: 'Folder'
          },
          children: [
            {
              data: {
                name: 'Invoices',
                size: '20kb',
                type: 'Text'
              }
            }
          ]
        }
      ]
    },
    {
      data: {
        name: 'Pictures',
        size: '150kb',
        type: 'Folder'
      },
      children: [
        {
          data: {
            name: 'barcelona.jpg',
            size: '90kb',
            type: 'Picture'
          }
        },
        {
          data: {
            name: 'primeui.png',
            size: '30kb',
            type: 'Picture'
          }
        },
        {
          data: {
            name: 'optimus.jpg',
            size: '30kb',
            type: 'Picture'
          }
        }
      ]
    }
  ];
  constructor() {}

  ngOnInit() {}
}
