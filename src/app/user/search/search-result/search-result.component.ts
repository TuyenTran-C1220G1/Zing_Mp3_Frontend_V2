import {Component, OnInit} from '@angular/core';
import {Song} from '../../../model/song';
import {Playlist} from '../../../model/playlist';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {SongService} from '../../../service/song.service';
import {ListenMusicService} from '../../listen-music.service';


@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  songs: Song[] = [];
  playlists: Playlist[] = [];
  nameSong: any;

  constructor(private httClient: HttpClient,
              private songService: SongService,
              private router: Router,
              private listenMusicService: ListenMusicService,
              private activatedRoute: ActivatedRoute,) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.nameSong = paramMap.get('name');
      this.searchSong(this.nameSong);
    });
  }

  ngOnInit() {
  }

  searchSong(nameSong: string) {
    this.songService.searchSong(nameSong).subscribe(songs => {
      this.songs = songs;
    });
  }

  addSongToPlaylist(idPlaylist: number, idSong: number) {
    // this.playlistService.addSongToPlaylist(idPlaylist,idSong).subscribe();
  }

  getInforSong(song) {
    this.listenMusicService.statusSong.next(true);
    this.listenMusicService.songs = this.songs;
    this.listenMusicService.songObject.next(song);
    this.listenMusicService.openFile(song);
  }

}
