import { OnInit, Component, Input } from "@angular/core";

@Component({
    selector: 'app-book',
    // template: `
    //     <h1>Howdy from Book Component</h1>
    // `
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.css']
})

export class BookComponent implements OnInit {

    ngOnInit() {}

    public _book = ''

    @Input()
    set book(book: string) {
        this._book = book
    }
    
    get book(): string {
        return this._book
    }
}