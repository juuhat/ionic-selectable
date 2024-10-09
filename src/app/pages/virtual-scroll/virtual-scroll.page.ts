import { Component, OnInit } from '@angular/core';
import { PortService } from '../../services';
import { Port } from '../../types';
import { FormsModule } from '@angular/forms';
import { IonicSelectableComponent } from '../../components/ionic-selectable/ionic-selectable.component';
import { IonicModule } from '@ionic/angular';

@Component({
    selector: 'virtual-scroll',
    templateUrl: './virtual-scroll.page.html',
    styleUrls: ['./virtual-scroll.page.scss'],
    standalone: true,
    imports: [IonicModule, IonicSelectableComponent, FormsModule]
})
export class VirtualScrollPage implements OnInit {
  ports: Port[];
  port: Port;

  constructor(
    private portService: PortService
  ) { }

  ngOnInit() {
    this.ports = []
    for (var i = 0; i < 10000; i++) {
      var p = new Port({ id: i, name: "Port"+i, timeZone: 0})
      this.ports.push(p)
    }
    //this.ports = this.portService.getPorts();
  }
}
