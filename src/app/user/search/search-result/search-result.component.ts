import {Component, OnInit} from '@angular/core';
import {Song} from '../../../model/song';
import {Playlist} from '../../../model/playlist';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {SongService} from '../../../service/song.service';
import {ListenMusicService} from '../../listen-music.service';
import {PlaylistService} from '../../../service/playlist.service';


@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  songs: Song[] = [];
  playlists: Playlist[] = [];
  name: any;

  playlistsSearch: Playlist[] = [];

  constructor(private httClient: HttpClient,
              private songService: SongService,
              private playlistService: PlaylistService,
              private router: Router,
              private listenMusicService: ListenMusicService,
              private activatedRoute: ActivatedRoute,) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.name = paramMap.get('name');
      this.searchSong(this.name);
      this.searchPlaylist(this.name);

    });
  }

  ngOnInit() {
    this.getMyPlaylist();
    $(document).ready(function() {
      $(".m24_tranding_more_icon").on("click", function(e) {
        if (e.preventDefault(), e.stopImmediatePropagation(), void 0 !== $(this).attr("data-other")) var t = $(this).parent().parent();
        else t = $(this).parent();
        t.find("ul.tranding_more_option").hasClass("tranding_open_option") ? t.find("ul.tranding_more_option").removeClass("tranding_open_option") : ($("ul.tranding_more_option.tranding_open_option").removeClass("tranding_open_option"), t.find("ul.tranding_more_option").addClass("tranding_open_option"))
      }), $(document).on("click", function(e) {
        $("ul.tranding_more_option.tranding_open_option").removeClass("tranding_open_option")
      })
    });
  }

  getMyPlaylist(){
    this.playlistService.showMyPlaylist().subscribe( plasLists=>{
      this.playlists = plasLists}, error => {
      console.log("error", error)
    });
  }

  searchSong(nameSong: string) {
    this.songService.searchSong(nameSong).subscribe(songs => {
      this.songs = songs;
    });
  }

  searchPlaylist(namePlaylist: string) {
    this.playlistService.searchPlaylist(namePlaylist).subscribe(playlists => {
      this.playlistsSearch= playlists;
    });
  }

  addSongToPlaylist(idPlaylist: number, idSong: number) {
    this.playlistService.addSongToPlaylist(idPlaylist,idSong).subscribe();
  }

  getInforSong(song) {
    this.listenMusicService.statusSong.next(true);
    this.listenMusicService.songs = this.songs;
    this.listenMusicService.songObject.next(song);
    this.listenMusicService.openFile(song);
  }

}
