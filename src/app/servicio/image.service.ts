import { Injectable, OnInit } from '@angular/core';
import { Storage, ref, uploadBytes, listAll, getDownloadURL} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageService implements OnInit {
    url: string = '';

  constructor(private storage: Storage) {

   }

  ngOnInit(): void{
    this.getImages();
  }
  public subirArchivo($event: any, name: string){
    const file = $event.target.files[0]
    const imgRef = ref(this.storage, `imagen/${file.name}`);

    uploadBytes(imgRef, file)
    .then(response => {this.getImages()})
    .catch(error => console.log(error))

  }

  getImages(){
    const imagesRef = ref(this.storage, 'imagen');

    listAll(imagesRef)
    .then(async response => {
      console.log(response);

      for(let item of response.items){
        this.url = await getDownloadURL(item);

      }
    })
    .catch(error => console.log(error))
  }
}
