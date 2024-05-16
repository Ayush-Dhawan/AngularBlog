import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private afs : AngularFirestore) { }

  loadData(){
    return this.afs.collection('posts', ref => ref.where('isFeatured', '==', true)).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, data}
        })
      })
    )
  }

  loadLatest(){
    return this.afs.collection('posts', ref => ref.orderBy("created_at")).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, data}
        })
      })
    )
  }

  loadSingleCategory(id: string){
    return this.afs.collection('posts', ref => ref.where('category.categoryId', '==', id)).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, data}
        })
      })
    )
  }

  loadSinglePost(id: string){
    return this.afs.doc(`posts/${id}`).valueChanges();
  }

  loadSimilarPosts(catId: string){
    return this.afs.collection('posts', ref => ref.where('category.categoryId', '==', catId).limit(4)).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, data}
        })
      })
    )
  }

  countViews(postId: string){
    const viewsCount = {
      views: firebase.firestore.FieldValue.increment(1)
    }
    this.afs.doc(`posts/${postId}`).update(viewsCount).then(() => console.log("view count updated!"))
  }
}
