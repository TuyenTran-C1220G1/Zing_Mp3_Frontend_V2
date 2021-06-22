import {Component, OnInit} from '@angular/core';
import {Artist} from '../../../model/artist';
import {ArtistService} from '../../../service/artist.service';
import {Song} from '../../../model/song';
import {SongService} from '../../../service/song.service';

declare var $: any;


// @ts-ignore
@Component({
  selector: 'app-feature-artits',
  templateUrl: './feature-artits.component.html',
  styleUrls: ['./feature-artits.component.css']
})

export class FeatureArtitsComponent implements OnInit {

  artists: Artist[] = [{
    id: null,
    nameArtist: null,
    description: null,
    avatar: null,
    dob: null,
    likes: null,
    gender: null,
  }, {
    id: null,
    nameArtist: null,
    description: null,
    avatar: null,
    dob: null,
    likes: null,
    gender: null,
  }, {
    id: null,
    nameArtist: null,
    description: null,
    avatar: null,
    dob: null,
    likes: null,
    gender: null,
  }, {
    id: null,
    nameArtist: null,
    description: null,
    avatar: null,
    dob: null,
    likes: null,
    gender: null,
  }, {
    id: null,
    nameArtist: null,
    description: null,
    avatar: null,
    dob: null,
    likes: null,
    gender: null,
  }, {
    id: null,
    nameArtist: null,
    description: null,
    avatar: null,
    dob: null,
    likes: null,
    gender: null,
  }];
  songs: Song[];
  id?: number;

  constructor(private artistService: ArtistService, private songService: SongService) {
  }

  ngOnInit() {
    this.getSongOfArtist(this.id);
    this.artistService.getTopArtis().subscribe(artists => {
      this.artists = artists;
      $(document).ready(function() {
        $('.featured_song_slider .owl-carousel').owlCarousel({
          loop: !0,
          margin: 15,
          autoplay: !0,
          smartSpeed: 1200,
          responsiveClass: !0,
          navText: ['<i class="flaticon-left-arrow"></i>', '<i class="flaticon-right-arrow"></i>'],
          responsive: {
            0: {
              items: 1,
              nav: !0
            },
            600: {
              items: 1,
              nav: !0
            },
            1000: {
              items: 1,
              nav: !0,
              loop: !0,
              margin: 20
            }
          }
        });
      });
    }, error => {
      console.log('error:', error);
    });

  }

  // getTopArtist() {
  //   this.artistService.getTopArtis().subscribe(artists => {
  //     this.artists = artists;
  //   }, error => {
  //     console.log('error:', error);
  //   });
  // }

  getSongOfArtist(id: number) {
    this.songService.findAllSongByArtist(id).subscribe(songs => {
        this.songs = songs;
      }
    );
  }

}
