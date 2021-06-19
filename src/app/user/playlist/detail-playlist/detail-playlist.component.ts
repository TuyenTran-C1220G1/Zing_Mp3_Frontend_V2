import {Component, OnInit} from '@angular/core';
import {PlaylistService} from '../../../service/playlist.service';
import {HttpClient} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Song} from '../../../model/song';
import {Playlist} from '../../../model/playlist';
import {SongService} from '../../../service/song.service';
import {ListenMusicService} from '../../listen-music.service';


@Component({
  selector: 'app-detail-playlist',
  templateUrl: './detail-playlist.component.html',
  styleUrls: ['./detail-playlist.component.css']
})
export class DetailPlaylistComponent implements OnInit {
  id?: number;
  songs: Song[] = [{songUrl:null},{songUrl:null},{songUrl:null}];
  song: Song;
  playlist?: Playlist={
    songs:null
  };

  constructor(private playlistService: PlaylistService,
              private httClient: HttpClient,
              private fb: FormBuilder, private songService: SongService,
              private activatedRoute: ActivatedRoute,
              private listenMusicService: ListenMusicService) {
    this.activatedRoute.paramMap.subscribe(async (paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.playlist = await this.getPlaylist(this.id);
      this.songs = this.playlist.songs;
      console.log(this.playlist.songs[0]);
      console.log(this.playlist);
    });
  }

  ngOnInit() {

    this.getPlaylist(this.id);
    console.log(this.playlist);
  }

  getPlaylist(id: number) {
    return this.playlistService.findById(id).toPromise()
  }
  getInforSong(song) {
    this.listenMusicService.statusSong.next(true);
    this.listenMusicService.songs = this.playlist.songs;
    this.listenMusicService.songObject.next(song);
    this.listenMusicService.openFile(song);
  }
}

