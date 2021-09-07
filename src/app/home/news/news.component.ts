import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  OnDestroy,
  Type,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation
} from '@angular/core';
import {SystemNewsComponent} from "../system-news/system-news.component";
import {OrganizationNewsComponent} from "../organization-news/organization-news.component";
import {UserNewsComponent} from "../user-news/user-news.component";
import {ActivatedRoute} from "@angular/router";
import {BaseNews} from "./base-news";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewsComponent implements AfterViewInit, OnDestroy {

  @ViewChild('newsContainer', {read: ViewContainerRef})
  newsContainer!: ViewContainerRef;

  private newsTypeStore: Map<string, Type<BaseNews<any>>> = new Map<string, Type<BaseNews<any>>>()

  private subscription: Subscription = new Subscription();

  emmittedValue: any | null;

  constructor(
    private readonly componentFactoryResolver: ComponentFactoryResolver,
    private readonly activatedRoute: ActivatedRoute
  ) {

    this.newsTypeStore.set('organization', OrganizationNewsComponent);
    this.newsTypeStore.set('user', UserNewsComponent);
    this.newsTypeStore.set('system', SystemNewsComponent);

  }

  ngAfterViewInit(): void {
    const componentName = this.activatedRoute.snapshot.paramMap.get('newsType') as string;
    const pageSize = this.activatedRoute.snapshot.paramMap.get('pageSize') as string;

    if(!componentName) {
      return;
    }

    const component = this.newsTypeStore.get(componentName);

    if(!component) {
      return;
    }

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory<BaseNews<any>>(component);
    let componentReference = this.newsContainer.createComponent(componentFactory);
    componentReference.instance.pageSize = Number(pageSize);
    this.subscription = componentReference.instance.eventEmitter.subscribe(
      next => {
        this.emmittedValue = next;
      }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
