import { Component, OnInit } from '@angular/core';
import {Artist} from '../../../model/artist';
import {ArtistService} from '../../../service/artist.service';
import {Song} from '../../../model/song';
declare var $: any;


// @ts-ignore
@Component({
  selector: 'app-feature-artits',
  templateUrl: './feature-artits.component.html',
  styleUrls: ['./feature-artits.component.css']
})

export class FeatureArtitsComponent implements OnInit {

  // @ts-ignore
  artists: Artist[] = [{
    id: null,
    nameArtist: null,
    description: null,
    avatar:null,
    songUrl:null,
    dob: null,
    likes: null,
    gender: null,
  },{
    id: null,
    nameArtist: null,
    description: null,
    avatar:null,
    songUrl:null,
    dob: null,
    likes: null,
    gender: null,
  },{
    id: null,
    nameArtist: null,
    description: null,
    avatar:null,
    songUrl:null,
    dob: null,
    likes: null,
    gender: null,
  },{
    id: null,
    nameArtist: null,
    description: null,
    avatar:null,
    songUrl:null,
    dob: null,
    likes: null,
    gender: null,
  },{
    id: null,
    nameArtist: null,
    description: null,
    avatar:null,
    songUrl:null,
    dob: null,
    likes: null,
    gender: null,
  },{
    id: null,
    nameArtist: null,
    description: null,
    avatar:null,
    songUrl:null,
    dob: null,
    likes: null,
    gender: null,
  }];
  artists2: Artist[];

  constructor(private artistService: ArtistService) {
    console.log('vao contructor')
    this.artistService.getTopArtis().subscribe(artists => {
      console.log(artists);
      this.artists = artists;
      console.log('đã lấy được')
    }, error => {console.log('error:', error); });
  }

  ngOnInit() {
    this.artistService.getTopArtis().subscribe(artists => {
      console.log(artists);
      this.artists = artists;
      console.log('đã lấy được')
    }, error => {console.log('error:', error); });
    $(document).ready(function() {
      $(".partner_slider_wraper .owl-carousel").owlCarousel({
        loop: !0,
        margin: 10,
        autoplay: !0,
        responsiveClass: !0,
        smartSpeed: 1200,
        navText: ['<i class="flaticon-left-arrow"></i>', '<i class="flaticon-right-arrow"></i>'],
        responsive: {
          0: {
            items: 1,
            nav: !0
          },
          500: {
            items: 3,
            nav: !0
          },
          700: {
            items: 4,
            nav: !0
          },
          1000: {
            items: 5,
            nav: !0,
            loop: !0,
            margin: 20
          }
        }
      })
    })

  }

  getTopArtist() {
    this.artistService.getTopArtis().subscribe(artists => {
      console.log(artists);
      this.artists = artists;
      console.log('đã lấy được')
    }, error => {console.log('error:', error); });
  }
}
