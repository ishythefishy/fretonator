import { async, TestBed } from '@angular/core/testing';
import { YouTubeLinkPipe } from './youtube-link.pipe';
import { SafeUrl } from '@angular/platform-browser';

describe('YoutubeLinkPipe', () => {

  let pipe: YouTubeLinkPipe;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [YouTubeLinkPipe]
    });
    TestBed.compileComponents();
  }));

  beforeEach(() => {
    pipe = TestBed.inject(YouTubeLinkPipe);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('returns a URL', () => {
    const result = pipe.transform('123') as any;
    expect(result.getTypeName()).toBe('URL');
  });

  it('returns the correct resource', () => {
    const result = pipe.transform('123') as any;
    expect(result.changingThisBreaksApplicationSecurity).toBe('https://www.youtube.com/watch?v=123');
  });

});