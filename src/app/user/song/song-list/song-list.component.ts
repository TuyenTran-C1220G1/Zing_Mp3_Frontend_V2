import {Component, OnInit} from '@angular/core';
import {Song} from "../../../model/song";
import {SongService} from "../../../service/song.service";
import {Playlist} from "../../../model/playlist";
import {PlaylistService} from "../../../service/playlist.service";
import {ListenMusicService} from '../../listen-music.service';
declare var $: any;
@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {

  songs: Song[] = [];
  playlists: Playlist[]=[];
  page = 1;
  pageSize =10;

  constructor(private songService: SongService, private playlistService: PlaylistService,
              private listenMusicService: ListenMusicService) {
  }

  ngOnInit() {

    this.getMyPlaylist();
    this.songService.getAll().subscribe(songs => {
      this.songs = songs;
      $(document).ready(function() {
        $(".m24_tranding_more_icon").on("click", function(e) {
          if (e.preventDefault(), e.stopImmediatePropagation(), void 0 !== $(this).attr("data-other")) var t = $(this).parent().parent();
          else t = $(this).parent();
          t.find("ul.tranding_more_option").hasClass("tranding_open_option") ? t.find("ul.tranding_more_option").removeClass("tranding_open_option") : ($("ul.tranding_more_option.tranding_open_option").removeClass("tranding_open_option"), t.find("ul.tranding_more_option").addClass("tranding_open_option"))
        }), $(document).on("click", function(e) {
          $("ul.tranding_more_option.tranding_open_option").removeClass("tranding_open_option")
        })
      });
    }, error => {
      console.log("error", error)
    });


  }

  getMyPlaylist(){
    this.playlistService.showMyPlaylist().subscribe( plasLists=>{
      this.playlists = plasLists}, error => {
      console.log("error", error)
    });
  }

 

  addSongToPlaylist(idPlaylist:number,idSong:number){
    this.playlistService.addSongToPlaylist(idPlaylist,idSong).subscribe();
  }
  getInforSong(song) {
    this.listenMusicService.statusSong.next(true);
    this.listenMusicService.songs = this.songs;
    this.listenMusicService.songObject.next(song);
    this.listenMusicService.openFile(song);
  }

}
