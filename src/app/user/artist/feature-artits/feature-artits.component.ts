import { Component, OnInit } from '@angular/core';
import {Artist} from '../../../model/artist';
import {ArtistService} from '../../../service/artist.service';
declare var $: any;

@Component({
  selector: 'app-feature-artits',
  templateUrl: './feature-artits.component.html',
  styleUrls: ['./feature-artits.component.css']
})
export class FeatureArtitsComponent implements OnInit {

  artists: Artist[] = [];

  constructor(private artistService: ArtistService) {
  }

  ngOnInit() {
    this.getTopArtist();
    $(function() {
      $('.treanding_song_slider .owl-carousel').owlCarousel({
        loop: !0,
        margin: 15,
        autoplay: !1,
        smartSpeed: 1200,
        responsiveClass: !0,
        navText: ['<i class="flaticon-left-arrow"></i>', '<i class="flaticon-right-arrow"></i>'],
        responsive: {
          0: {
            items: 1,
            nav: !0
          },
          600: {
            items: 3,
            nav: !0
          },
          1000: {
            items: 5,
            nav: !0,
            loop: !0,
            margin: 20
          }
        }
      });
    });

  }

  getTopArtist() {
    this.artistService.getTopArtis().subscribe(artists => {
      console.log(artists);
      this.artists = artists;
    }, error => {console.log('error', error); });
  }
}
