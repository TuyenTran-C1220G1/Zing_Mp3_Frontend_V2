import {Component, OnInit} from '@angular/core';
import {Song} from "../../../model/song";
import {SongService} from "../../../service/song.service";
import {Playlist} from "../../../model/playlist";
import {PlaylistService} from "../../../service/playlist.service";

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {

  songs: Song[] = [];
  playlists: Playlist[]=[];


  constructor(private songService: SongService, private playlistService: PlaylistService) {
  }

  ngOnInit() {
    this.getAll();
    this.getMyPlaylist();

  }

  getMyPlaylist(){
    this.playlistService.showMyPlaylist().subscribe( plasLists=>{
      this.playlists = plasLists}, error => {
        console.log("error", error)
      });
  }

  getAll() {
    this.songService.getAll().subscribe(songs => {
      this.songs = songs.content;
    }, error => {
      console.log("error", error)
    });
  }

  addSongToPlaylist(idPlaylist:number,idSong:number){
    this.playlistService.addSongToPlaylist(idPlaylist,idSong).subscribe();
  }

}
