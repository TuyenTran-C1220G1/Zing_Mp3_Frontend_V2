import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {CommentArist} from '../../../model/comment-arist';
import {Artist} from '../../../model/artist';
import {ArtistService} from '../../../service/artist.service';
import {LikeArist} from '../../../model/like-arist';
import {CommentArtistService} from '../../../service/comment-artist.service';

@Component({
  selector: 'app-comment-artist',
  templateUrl: './comment-artist.component.html',
  styleUrls: ['./comment-artist.component.css']
})
export class CommentArtistComponent implements OnInit {

  success: boolean;
  submitted = false;
  commentArists: CommentArist[] = [];
  artist: Artist = {
    likes:null,
  };
  commentAristForm: FormGroup;
  likeArtis: LikeArist = {
    // isLike:null,
  };
  id?: number;
  statusLike : boolean;
  // @ts-ignore
  @ViewChild('likeElement') likeElement : ElementRef;
  constructor(private artistService: ArtistService,
              private commentArtistService: CommentArtistService,
              private httClient: HttpClient,
              private fb: FormBuilder,
              private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.commentAristForm = this.fb.group({
      content: ['', [Validators.required, Validators.max(200)]],
    });
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getAllComment(this.id);
      this.getArtist(this.id);
      this.handleLikeAritst(this.id);
    });
    // this.playlistService.likePlaylist(this.id).subscribe(likePlaylist =>{
    //   this.likePlaylist = likePlaylist;
    //   console.log('contructor:',this.likePlaylist.isLike);
    //   // this.statusLike = this.likePlaylist.isLike;
    // })
  }

  getAllComment(id: number) {
    this.commentArtistService.allCommentInArtist(id).subscribe(comment => {
      this.commentArists = comment;
    });
  }

  getArtist(id: number) {
    this.artistService.findById(id).subscribe(artists => {
      this.artist = artists;
    });
  }

  getPostComment(id: number) {
    this.submitted = true;
    if (this.commentAristForm.valid) {
      const comment = this.commentAristForm.value;
      this.commentArtistService.postComment(comment, id).subscribe(() => {
        this.success = true;
        this.submitted = false;
        this.commentAristForm.reset();
        this.getAllComment(id);
      })
    }
  }
  handleLikeAritst(id: number) {
    this.likeArtis.isLike = !this.likeArtis.isLike;
    if(this.likeArtis.isLike){
      this.likeElement.nativeElement.style.color = 'black';
    }else{
      this.likeElement.nativeElement.style.color = 'red';
    }
    this.commentArtistService.likeArtist(id).subscribe(newLikePL =>{
      console.log('update success');
      console.log(this.likeArtis.isLike);
      this.getArtist(id)
    })
  }

}
