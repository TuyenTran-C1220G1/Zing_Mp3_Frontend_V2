import {Component, OnInit} from '@angular/core';
import {Artist} from '../../../model/artist';
import {ArtistService} from '../../../service/artist.service';

@Component({
  selector: 'app-all-artist',
  templateUrl: './all-artist.component.html',
  styleUrls: ['./all-artist.component.css']
})
export class AllArtistComponent implements OnInit {
  artists: Artist[] = [];
  page = 1;
  pageSize = 8;
  constructor(private artistService: ArtistService) {
  }

  ngOnInit() {
    this.getAllArtist();
  }

  private getAllArtist() {
    return this.artistService.getAll().subscribe(artists => {
      this.artists = artists;
    })
  }
}
