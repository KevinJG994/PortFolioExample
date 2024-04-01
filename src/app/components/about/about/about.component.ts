import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  links: any [] = [
    {
      imagen: "https://github.com/KevinJG994/KevinJG994/assets/96546093/c0265393-a350-4ce5-860c-aec343f9f781",
      URL: "#"
    },
    {
      imagen: "https://github.com/KevinJG994/KevinJG994/assets/96546093/734d10d0-eaa8-420d-b3de-b0d4e948986c",
      URL: "#"
    },
    {
      imagen: "https://github.com/KevinJG994/KevinJG994/assets/96546093/e822eade-58d2-4800-abd1-1970b6a340a2",
      URL: "#"
    },
  ]

}
