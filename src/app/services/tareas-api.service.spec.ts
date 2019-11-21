import { TestBed } from '@angular/core/testing';
import { TareasApiService } from './tareas-api.service';
import { HttpClientModule } from '@angular/common/http';
import { TareaModel } from '../models/tarea.model';

xdescribe('TareasApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: TareasApiService = TestBed.get(TareasApiService);
    expect(service).toBeTruthy();
  });

  it('should get tareas', () => {
    const service: TareasApiService = TestBed.get(TareasApiService);
    /* service.readAll().subscribe(
      r => console.log(r)
    ) */

    expect(service.readAll()).toBeTruthy();
  });

  it('should get 1 tarea', () => {
    const service: TareasApiService = TestBed.get(TareasApiService);
   /*  service.read('1').subscribe(
      r => console.log(r)
    ) */

    expect(service.read('1')).toBeTruthy();
  });


  it('should create 1 tarea', () => {
    const service: TareasApiService = TestBed.get(TareasApiService);
   /*  service.create(new TareaModel()).subscribe(
      r => console.log(r)
    ) */

    // expect(service.create(new TareaModel()).toBeTruthy();
  });

  it('should create 1 tarea', () => {
    const service: TareasApiService = TestBed.get(TareasApiService);
  /*   service.delete('1').subscribe(
      r => console.log(r)
    )

    expect(service.read('1')).toBeTruthy(); */
  });

});
