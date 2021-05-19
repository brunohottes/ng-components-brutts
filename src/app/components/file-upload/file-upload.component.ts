import { ChangeDetectorRef, Component, ElementRef, HostListener, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FileUploadComponent,
      multi: true
    }
  ]
})
export class FileUploadComponent implements ControlValueAccessor {

  onChange: Function;
  file: File | null = null;

  // @HostListener('change', ['$event.target.files']) emitFiles(event: FileList) {
  //   const file = event && event.item(0);
  //   // console.log(file);
  //   this.onChange(file);
  //   this.file = file;
  // }

  constructor(private host: ElementRef<HTMLInputElement>, private cd: ChangeDetectorRef) { }

  selectedFile($event) {
    console.log($event);
    if ($event.target && $event.target.files[0]) {
      const file = $event.target.files[0];
      this.file = file;
      this.cd.markForCheck();
    }
  }

  writeValue(value: null) {
    // clear file input
    // this.host.nativeElement.value = '';
    // this.file = null;
  }

  clearInput() {
    this.host.nativeElement.value = '';
    this.file = null;
    // this.onChange(null);
    // this.cd.detectChanges();
  }

  registerOnChange(fn: Function) {
    this.onChange = fn;
  }

  registerOnTouched(fn: Function) { }

}
