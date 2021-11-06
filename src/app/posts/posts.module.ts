import { RouterModule, Routes } from '@angular/router';

import { AddPostComponent } from './add-post/add-post.component';
import { CommonModule } from '@angular/common';
import { EditPostComponent } from './edit-post/edit-post.component';
import { NgModule } from '@angular/core';
import { POST_STATE } from './state/posts.selectors';
import { PostsListComponent } from './posts-list/posts-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { postsReducer } from './state/posts.reducer';

const routes: Routes = [
  {
    path: '',
    component: PostsListComponent,
    children: [
      {
        path: 'add',
        component: AddPostComponent,
      },
      {
        path: 'edit/:id',
        component: EditPostComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(POST_STATE, postsReducer),
  ],
  declarations: [PostsListComponent, AddPostComponent, EditPostComponent],
})
export class PostsModule {}
