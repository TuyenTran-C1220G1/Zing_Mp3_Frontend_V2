import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CommentSong} from '../../../model/comment-song';
import {Song} from '../../../model/song';
import {LikeSong} from '../../../model/like-song';
import {SongService} from '../../../service/song.service';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Commentplaylist} from '../../../model/commentplaylist';
import {Playlist} from '../../../model/playlist';
import {Likeplaylist} from '../../../model/likeplaylist';
import {SongCommentService} from '../../../service/song-comment.service';

@Component({
  selector: 'app-comment-song',
  templateUrl: './comment-song.component.html',
  styleUrls: ['./comment-song.component.css']
})
export class CommentSongComponent implements OnInit {
  success: boolean;
  submitted = false;
  commentSongs: CommentSong[] = [];
  song: Song = {
    likes:null
  };
  commentSongForm: FormGroup;
  likeSong: LikeSong = {
    // isLike:null,
  };
  id?: number;
  statusLike : boolean;
  // @ts-ignore
  @ViewChild('likeElement') likeElement : ElementRef;
  constructor(private songService: SongService,
              private songCommentService: SongCommentService,
              private httClient: HttpClient,
              private fb: FormBuilder,
              private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.commentSongForm = this.fb.group({
      content: ['', [Validators.required, Validators.max(200)]],
    });
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getAllComment(this.id);
      this.getSong(this.id);
      this.handleLikeSong(this.id);
    });
  }

  getAllComment(id: number) {
    this.songCommentService.allCommentInSong(id).subscribe(comment => {
      this.commentSongs = comment;
    });
  }

  getSong(id: number) {
    this.songService.findById(id).subscribe(songs => {
      this.song = songs;
    });
  }

  getPostComment(id: number) {
    this.submitted = true;
    if (this.commentSongForm.valid) {
      const comment = this.commentSongForm.value;
      this.songCommentService.postComment(comment, id).subscribe(() => {
        this.success = true;
        this.submitted = false;
        this.commentSongForm.reset();
        this.getAllComment(id);
      })
    }
  }
  handleLikeSong(id: number) {
    this.likeSong.isLike = !this.likeSong.isLike;
    if(this.likeSong.isLike){
      this.likeElement.nativeElement.style.color = 'red';
    }else{
      this.likeElement.nativeElement.style.color = 'black';
    }
    this.songCommentService.likePlaylist(id).subscribe(newLikePL =>{
      console.log('update success');
      console.log(this.likeSong.isLike);
      this.getSong(id);
    })
  }

}
