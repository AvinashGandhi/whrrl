import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-randomjokes',
  templateUrl: './randomjokes.component.html',
  styleUrls: ['./randomjokes.component.css']
})
export class RandomjokesComponent implements OnInit {
  result:any = [];
  submitform:FormGroup;
  name;
  playlistName;
  PlaylistData;
  getjokes:any = [];
  bindlist = {
    playlistName:"",
    PlaylistData:""
  };
  addData:any = [];
  playlist;
  constructor(private http:HttpClient, private frm:FormBuilder) { }

  ngOnInit(): void {
    this.submitform = this.frm.group({
      name:['',Validators.required]
    });
    this.http.get("https://karljoke.herokuapp.com/jokes/ten").subscribe((res)=>{
      this.result = res;
      console.log(this.result);
      localStorage.setItem("jokes",JSON.stringify(this.result));
      
    });
  }

  createPlaylist(e:FormGroup){
    this.name = e.value.name;
    this.getjokes = JSON.parse(localStorage.getItem("jokes")); 
    this.bindlist={
      playlistName:this.name,
      PlaylistData:this.getjokes
    }
    this.addData.push(this.bindlist)
    console.log(this.addData);
    
  }

}
