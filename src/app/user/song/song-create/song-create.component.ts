import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../../service/authentication.service";
import {SongService} from "../../../service/song.service";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ArtistService} from "../../../service/artist.service";
import {Artist} from "../../../model/artist";
import {Genre} from "../../../model/genre";
import {GenreService} from "../../../service/genre.service";
import * as $ from "jquery";
import Swal from "sweetalert2";




@Component({
  selector: 'app-song-create',
  templateUrl: './song-create.component.html',
  styleUrls: ['./song-create.component.css']
})
export class SongCreateComponent implements OnInit {
  success: boolean;
  submitted = false;
  avatar = '';
  files = '';
  artists: Artist[] = []
  genres: Genre[] = []
  songForm: FormGroup;

  constructor(private auth: AuthenticationService, private songService: SongService,
              private artistService: ArtistService, private genreService: GenreService,
              private fb: FormBuilder) {
    this.getAllGenre();
    this.getAllArtist();

  }


  onChangeAvatar($event) {
      this.avatar = $event;
      if(this.avatar != ""){
      }
  }

  onChangeFile($event) {
    this.files = $event;
    console.log('files ===>', this.files);
  }

  ngOnInit() {
    this.songForm = this.fb.group({
      nameSong: ['', [Validators.required, Validators.max(20)]],
      description: ['', [Validators.required, Validators.max(500)]],
      author: ['', [Validators.required]],
      artist: ['', [Validators.required]],
      genre: ['', [Validators.required]],
      album: [''],
      imageUrl: [''],
      songUrl: [''],

    })

  }

  createSong() {
    this.submitted = true;
    if (this.songForm.valid) {
      const song = this.songForm.value;
      song.imageUrl = this.avatar;
      song.songUrl = this.files;
      song.artist = {
        id: song.artist
      }
      song.genre = {
        id: song.genre
      }
      this.songService.saveSong(song).subscribe(() => {
        this.success = true;
        this.submitted = false;
        $(function() {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
          });
          // @ts-ignore
          Toast.fire({
            icon: 'success',
            type: 'success',
            title: 'update Song successfully',
          });
        });
        this.songForm.reset();
      }, e => {
        console.log(e);
      });
    }
    this.success = false;
  }
  getAllArtist() {
    this.artistService.getAll().subscribe(artists => {
      this.artists = artists;
    })
  }
  getAllGenre() {
    this.genreService.getAll().subscribe(genres => {
      this.genres = genres;
    })
  }
  resetForm() {
    this.songForm.reset();
  }
}
