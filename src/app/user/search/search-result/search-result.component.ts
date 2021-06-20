import { Component, OnInit } from '@angular/core';
import {Song} from '../../../model/song';
import {Playlist} from '../../../model/playlist';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  songs: Song[] = [];
  playlists: Playlist[]=[];

  constructor() { }

  ngOnInit() {
  }

  addSongToPlaylist(idPlaylist:number,idSong:number){
    // this.playlistService.addSongToPlaylist(idPlaylist,idSong).subscribe();
  }
  // getInforSong(song) {
  //   this.listenMusicService.statusSong.next(true);
  //   this.listenMusicService.songs = this.songs;
  //   this.listenMusicService.songObject.next(song);
  //   this.listenMusicService.openFile(song);
  // }

}
