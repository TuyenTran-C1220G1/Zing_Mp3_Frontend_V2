import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { FeatureArtitsComponent } from './artist/feature-artits/feature-artits.component';
import {TopSongComponent} from './song/top-song/top-song.component';
import {TreandingSongsComponent} from './song/treanding-songs/treanding-songs.component';
import {ArtistModule} from './artist/artist.module';
import {NewPlaylistComponent} from './playlist/new-playlist/new-playlist.component';
import {TopPlaylistComponent} from './playlist/top-playlist/top-playlist.component';
import {AblumComponent} from './ablum/ablum.component';
import {CreatePlaylistComponent} from './playlist/create-playlist/create-playlist.component';
import {EditPlaylistComponent} from './playlist/edit-playlist/edit-playlist.component';
import {ListPlaylistComponent} from './playlist/list-playlist/list-playlist.component';
import {SongModule} from './song/song.module';
import {SongDetailComponent} from './song/song-detail/song-detail.component';
import {SongDeleteComponent} from './song/song-delete/song-delete.component';
import {SongListComponent} from './song/song-list/song-list.component';
import {SongEditComponent} from './song/song-edit/song-edit.component';
import {SongCreateComponent} from './song/song-create/song-create.component';
import {UploadModule} from '../upload/upload.module';
import { UserEditComponent } from './user-edit/user-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import {SongUserComponent} from './song/song-user/song-user.component';
import {SongPlayComponent} from './song/song-play/song-play.component';
import {YourPlaylistComponent} from './playlist/your-playlist/your-playlist.component';
import {CarouselModule} from "ngx-owl-carousel-o";


@NgModule({
  declarations: [NewPlaylistComponent,
    TopPlaylistComponent,
    AblumComponent,
    FeatureArtitsComponent,
    TopSongComponent,
    TreandingSongsComponent,
    SongDetailComponent,
    SongDeleteComponent,
    SongListComponent,
    SongEditComponent,
    SongCreateComponent,
    CreatePlaylistComponent,
    EditPlaylistComponent,
    ListPlaylistComponent,
    UserEditComponent,
    SongUserComponent,
    SongPlayComponent,
    YourPlaylistComponent

  ],


  exports: [
    FeatureArtitsComponent,
    TopSongComponent,
    TreandingSongsComponent,
    NewPlaylistComponent,
    TopPlaylistComponent,
    AblumComponent,
    SongDetailComponent,
    SongDeleteComponent,
    SongListComponent,
    SongEditComponent,
    SongCreateComponent,
    CreatePlaylistComponent,
    EditPlaylistComponent,
    ListPlaylistComponent,
    UserEditComponent,
    SongUserComponent,
    SongUserComponent,
    CreatePlaylistComponent,
    NewPlaylistComponent,
    TopPlaylistComponent,
    CreatePlaylistComponent,
    NewPlaylistComponent,
    TopPlaylistComponent,
    EditPlaylistComponent,
    SongPlayComponent,
    YourPlaylistComponent
  ],
    imports: [
        CommonModule,
        UserRoutingModule,
        UploadModule,
        ReactiveFormsModule,
        NgbCarouselModule,
        CarouselModule
    ],

})
export class UserModule { }
