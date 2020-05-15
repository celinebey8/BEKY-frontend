import { Component } from '@angular/core';
import { faAngleUp} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  faAngleUp = faAngleUp ;
  // faHome = faHome ;
  constructor() { }
  goToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
