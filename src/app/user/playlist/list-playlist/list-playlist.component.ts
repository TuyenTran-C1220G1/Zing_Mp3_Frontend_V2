import { Component, OnInit } from '@angular/core';
import {Playlist} from '../../../model/playlist';
import {PlaylistService} from '../../../service/playlist.service';

@Component({
  selector: 'app-list-playlist',
  templateUrl: './list-playlist.component.html',
  styleUrls: ['./list-playlist.component.css']
})
export class ListPlaylistComponent implements OnInit {
  playlist: Playlist[] = [];
  page = 0;
  size = 5;
  constructor(
    private playlistService: PlaylistService
  ) {
  }

  ngOnInit() {
    this.getAllPlayList(this.page, this.size);
  }

  getAllPlayList(page, size) {
    this.playlistService.getAll(page, size).subscribe(playLists => {
      this.playlist = playLists;
    });
  }
  next() {
    this.page++;
    this.getAllPlayList(this.page, this.size);
  }

  previous() {
    this.page--;
    this.getAllPlayList(this.page, this.size);
  }
}
