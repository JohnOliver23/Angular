import { Component, OnInit, ViewChild } from '@angular/core';
import { ImoveisApiModel } from 'src/app/services/imoveis-api-model';
import { ImoveisApiService } from 'src/app/services/imoveis-api.service';

@Component({
  selector: 'app-imoveis-slide-show',
  templateUrl: './imoveis-slide-show.component.html',
  styleUrls: ['./imoveis-slide-show.component.css'],
})
export class ImoveisSlideShowComponent implements OnInit {
  imageSources: string[] = [];

  constructor(public imoveisApi: ImoveisApiService) {}

  ngOnInit(): void {
    this.imoveisApi.get().subscribe({
      next: (retorno) => this.inicializar(retorno),
    });
  }

  private inicializar(dadosApi: ImoveisApiModel[]): void {
    this.imageSources = dadosApi.map((data) => data.image);
  }

  @ViewChild('slideshow') slideshow: any;
}
