import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AngularFireStorage, AngularFireStorageReference} from '@angular/fire/storage';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  selectedFile: File;
  ref: AngularFireStorageReference;
  downloadURL: string;
  checkUploadAvatar = false;
  @Output()
  giveURLtoCreate = new EventEmitter<string>();
  @Output()
  sendAvatarUrl = new EventEmitter<string>();
  constructor(private httClient: HttpClient,
              private afStorage: AngularFireStorage) { }

  ngOnInit(): void {
  }
  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }
  onUpload() {
    this.checkUploadAvatar = true;
    const id = Math.random().toString(36).substring(2); // upload file tao 1 string random
    this.ref = this.afStorage.ref(id);
    this.ref.put(this.selectedFile)
      .then(snapshot => {
        return snapshot.ref.getDownloadURL(); // tra ve  1 duong link download
      })
      .then(downloadURL => {
        this.downloadURL = downloadURL;
        this.giveURLtoCreate.emit(this.downloadURL);
        console.log(downloadURL);
        this.checkUploadAvatar = false;
        return downloadURL;
      })
      // tslint:disable-next-line:no-shadowed-variable
      .catch(error => {
        console.log(`Failed to upload avatar and get link -${error}`);
      });
  }

}
