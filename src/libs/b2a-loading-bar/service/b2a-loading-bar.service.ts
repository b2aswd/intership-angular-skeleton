import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

export enum B2aLoadingBarEventType {
    PROGRESS,
    HEIGHT,
    COLOR,
    VISIBLE,
}

export class B2aLoadingBarEvent {
    constructor(public type: B2aLoadingBarEventType, public value: any) {}
}

/**
 *
 * Check and return true if an object not undefined or null
 */
export function isPresent(obj: any) {
    return obj !== undefined && obj !== null;
}

/*!
 * Copyright (C) 2016 Sergey Akopkokhyants
 * This project is licensed under the terms of the MIT license.
 * https://github.com/akserg/ng2-slim-loading-bar
 *
 * NOTE: originally taken from https://github.com/akserg/ng2-slim-loading-bar
 */
@Injectable({providedIn: 'root'})
export class B2aLoadingBarService {
    private _progress: number = 0;
    private _visible: boolean = true;
    private _intervalCounterId: any = 0;
    interval = 60; // in milliseconds

    private eventSource: Subject<B2aLoadingBarEvent> = new Subject<B2aLoadingBarEvent>();
    events: Observable<B2aLoadingBarEvent> = this.eventSource.asObservable();

    set progress(value: number) {
        if (isPresent(value)) {
            if (value > 0) {
                this.visible = true;
            }
            this._progress = value;
            this._emitEvent(
                new B2aLoadingBarEvent(B2aLoadingBarEventType.PROGRESS, this._progress),
            );
        }
    }

    get progress(): number {
        return this._progress;
    }

    set visible(value: boolean) {
        if (isPresent(value)) {
            this._visible = value;
            this._emitEvent(new B2aLoadingBarEvent(B2aLoadingBarEventType.VISIBLE, this._visible));
        }
    }

    get visible(): boolean {
        return this._visible;
    }

    start() {
        this.stop();
        this.visible = true;

        this._intervalCounterId = setInterval(() => {
            // Increment the progress and update view component
            this.progress++;
        }, this.interval);
    }

    stop() {
        if (this._intervalCounterId) {
            clearInterval(this._intervalCounterId);
            this._intervalCounterId = null;
        }
    }

    reset() {
        this.stop();
        this.progress = 0;
    }

    complete() {
        this.progress = 100;
        this.stop();
        setTimeout(() => {
            this.visible = false;
            this.progress = 0;
        }, 250);
    }

    private _emitEvent(event: B2aLoadingBarEvent) {
        if (this.eventSource) {
            // Push up a new event
            this.eventSource.next(event);
        }
    }
}
