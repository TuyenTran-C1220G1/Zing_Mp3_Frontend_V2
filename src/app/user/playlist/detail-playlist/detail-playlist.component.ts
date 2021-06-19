import {Component, OnInit} from '@angular/core';
import {PlaylistService} from '../../../service/playlist.service';
import {HttpClient} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Song} from '../../../model/song';
import {Playlist} from '../../../model/playlist';
import {SongService} from '../../../service/song.service';


@Component({
  selector: 'app-detail-playlist',
  templateUrl: './detail-playlist.component.html',
  styleUrls: ['./detail-playlist.component.css']
})
export class DetailPlaylistComponent implements OnInit {
  id?: number;
  // songs?: Song[] = [];
  playlist?: Playlist;

  constructor(private playlistService: PlaylistService,
              private httClient: HttpClient,
              private fb: FormBuilder, private songService: SongService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(async (paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.playlist = await this.getPlaylist(this.id);
    });

  }

  ngOnInit() {

    this.getPlaylist(this.id);
  }

  getPlaylist(id: number) {
    return this.playlistService.findById(id).toPromise()
  }

}

