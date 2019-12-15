import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


export interface Group {
  ungrouped: Array<any>;
  [key: string]: Array<object>;
}

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  title = 'json-file-read-angular';

  public grouping: Group = {ungrouped: null};
  public form: FormGroup;
  groupform = this.fb.group({
    index: [null, Validators.required],
    group: [null, Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    console.log(this.grouping.ungrouped);
  }


  onSubmit(){
    console.log(this.groupform.value.nama);
    var index =  this.groupform.value.index;
    //var index = this.grouping.ungrouped.map(x => x.nama_lengkap).indexOf(this.groupform.value.nama);
    console.log(index);
    console.log(this.grouping.ungrouped[index]);
    console.log(this.grouping.ungrouped);
    var groupProp = this.groupform.value.group;
    if(this.grouping.hasOwnProperty(groupProp)){
      console.log('has properties');
      this.grouping[groupProp].push(this.grouping.ungrouped[index])
  }
  else{
    this.grouping[groupProp] = [];
    this.grouping[groupProp].push(this.grouping.ungrouped[index]);
  }
    this.grouping.ungrouped.splice(index, 1);
    console.log(this.grouping);
  }

  /*

  onDeleteItem(index) {
    if (confirm("Want to delete it?")) {
      this.grouping.splice(index, 1);
    } else {
      console.log('cancel');
    }
  }

  sortedArray() {
    var groups = this.grouping.reduce(function(obj,item){
      obj[item.group] = obj[item.group] || [];
      obj[item.group].push(item.nama);
      return obj;
    }, {});
    var myArray = Object.keys(groups).map(function(key){
      return {group: key, nama: groups[key]};
    });
  }
*/
}
