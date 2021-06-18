import {Component, OnInit, DoCheck, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ListenMusicService} from '../../listen-music.service';
import {Song} from '../../../model/song';
import {Subscription} from 'rxjs';
import {UserService} from '../../../service/user/user.service';


@Component({
  selector: 'app-song-play',
  templateUrl: './song-play.component.html',
  styleUrls: ['./song-play.component.css']
})
export class SongPlayComponent implements OnInit {
  inforSong: any;
  song: Song;
  status = false;
  subscription: Subscription;
  listPlaylist: Song[];
  indexSong = 0;

  constructor(private route: ActivatedRoute, private listenMusicService: ListenMusicService, private userService: UserService) {
    this.listenMusicService.getState().subscribe(state => {
      // Neu bai hat da play het thi next bai hat moi
      this.listenMusicService.songObject.asObservable().subscribe(song => {
        this.song = song;
        console.log(this.song);
      });
      this.listPlaylist = this.listenMusicService.songs; // Gan mot list bai hat
      console.log(this.listPlaylist)
      this.listPlaylist.filter((song, index: number) => {
        if (song.id === this.song.id) {
          this.indexSong = index;
        }
      });
      const isBaiHatCuoiCungTrongPlaylist = (this.indexSong === (this.listPlaylist.length - 1));
      if (state.state === 'pause' && state.currentTime >= state.duration) {
        this.indexSong += 1;
        console.log('Next bai hat nhe');
        this.listenMusicService.songObject.next(this.listPlaylist[this.indexSong]);
        // set lai bai hat
        this.listenMusicService.openFile(this.listPlaylist[this.indexSong]);
      } else {
        console.log('Sao khong next bai hat');
      }
    });
  }

  play() {
    this.status ? this.listenMusicService.play() : this.listenMusicService.pause();
    this.status = !this.status;
  }

  ngOnInit() {
  }

  setVolume(event: Event) {
    this.listenMusicService.setVolume(event);
  }
}
