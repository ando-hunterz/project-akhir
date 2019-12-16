import { Component, OnInit, HostListener, OnDestroy } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, NavigationStart, Event, NavigationEnd } from "@angular/router";
import { MahasiswaApiService } from "src/app/shared/services/mahasiswa-api.service";
import { Mahasiswa } from "src/app/shared/model/mahasiswa";

export interface Group {
  ungrouped: Array<any>;
  [key: string]: Array<object>;
}

@Component({
  selector: "app-group",
  templateUrl: "./group.component.html",
  styleUrls: ["./group.component.scss"]
})
export class GroupComponent implements OnInit {
  public daftar: any;

  public daftarMaha: any;
  public groupingAkhir: any;
  public groupProperty: string[] = [];
  public grouping: Group = { ungrouped: null };
  public form: FormGroup;
  private daftarGroup: any;
  private mahasiswa: Mahasiswa;
  groupform = this.fb.group({
    index: [null, Validators.required],
    group: [null, Validators.required]
  });

  constructor(
    private mahasiswaApi: MahasiswaApiService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  trackByFn(index, maha) {
    return index;
  }

  ngOnInit() {
    this.mahasiswaApi.getAllMahasiswaDataSortByNimDesc().subscribe(
      result => {
        this.mahasiswa = result;
        console.log(result);
      },
      error => {
        console.log(error);
      }
    );
    this.mahasiswaApi.viewUser().subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
    this.mahasiswaApi.postUserVerify().subscribe(
      res => {
        console.log(res);
      },
      err => {
        localStorage.removeItem("token");
        this.mahasiswaApi.getCurrentToken();
        this.router.navigate(["/login"]);
      }
    );
    this.daftar = localStorage.getItem("MahaJSON");
    const groupjs = localStorage.getItem("GroupJSON");
    if (groupjs === "null") {
      this.groupProperty.push("ungrouped");
    } else {
      this.groupProperty = JSON.parse(groupjs);
    }
    this.daftarMaha = JSON.parse(this.daftar);
    this.grouping = this.daftarMaha;
  }

  onSubmit() {
    console.log(this.groupform.value.index);
    if (
      this.groupform.value.index != null &&
      this.groupform.value.group != null &&
      this.groupform.value.index < this.mahasiswa.result.count
    ) {
      const index = this.groupform.value.index;
      let groupProp = this.groupform.value.group;
      groupProp = groupProp.toLowerCase();
      if (!this.groupProperty.includes(groupProp)) {
        this.groupProperty.push(groupProp);
      }
      if (this.grouping.hasOwnProperty(groupProp)) {
        this.grouping[groupProp].push(this.grouping.ungrouped[index]);
      } else {
        this.grouping[groupProp] = [];
        this.grouping[groupProp].push(this.grouping.ungrouped[index]);
      }
      this.grouping.ungrouped.splice(index, 1);
      this.saveState();
      this.mahasiswa.result.count = this.mahasiswa.result.count - 1;
    } else {
      alert("Pilih Nama Valid dan Group");
    }
  }

  deleteMahasiswaGroup(groupPro, index) {
    const tempGroup = this.grouping[groupPro];
    this.grouping.ungrouped.push(tempGroup[index]);
    this.grouping[groupPro].splice(index, 1);
    this.grouping[groupPro];
    if (this.grouping[groupPro].length === 0) {
      delete this.grouping[groupPro];
    }
    this.saveState();
  }

  saveState() {
    this.groupingAkhir = JSON.stringify(this.grouping);
    this.daftarGroup = JSON.stringify(this.groupProperty);
    localStorage.setItem("MahaJSON", this.groupingAkhir);
    localStorage.setItem("GroupJSON", this.daftarGroup);
  }
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
