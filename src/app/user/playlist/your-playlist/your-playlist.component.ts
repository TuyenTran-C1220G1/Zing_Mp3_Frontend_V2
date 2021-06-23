import {Component, OnInit} from '@angular/core';
import {Playlist} from '../../../model/playlist';
import {PlaylistService} from '../../../service/playlist.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-your-playlist',
  templateUrl: './your-playlist.component.html',
  styleUrls: ['./your-playlist.component.css']
})
export class YourPlaylistComponent implements OnInit {
  myPlaylist: Playlist[] = [];
  playlist: Playlist;

  constructor(
    private playlistService: PlaylistService
  ) {
  }

  ngOnInit() {
    this.getMyPlayList();
  }

  getMyPlayList() {
    this.playlistService.showMyPlaylist().subscribe(playLists => {
      this.myPlaylist = playLists;
    });
  }

  deletePlaylist(id: number) {
    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this playlist!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.playlistService.deletePlaylist(id).subscribe(playlist => {
          this.playlist = playlist;
          this.getMyPlayList()
        }, error => {
          console.log("error", error)
        })
        Swal.fire(
          'Deleted!',
          'Your playlist has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your song playlist is safe :)',
          'error'
        )
      }
    })

  }
}
