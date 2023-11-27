var App = App || {};

App.YoutubePlaylistLoader = {
  
  resultsTarget: null,
  
  xhr: null,
  
  apiBase: 'https://www.googleapis.com/youtube/v3',
  
  prevPageToken: null,
  nextPageToken: null,
  
  results: null,

  params: {
    playlistId: 'PLCuVYHE7O2A0XGkdhaU_M4-IkEIq5hSOQ',
    key: 'AIzaSyCO9WXh_74m7ATK50P0vegWRQwjVADShmA',
    part: 'contentDetails,snippet',
    pageToken: null
  },
  
  init: function(resultsTarget) {
    var _this = App.YoutubePlaylistLoader;
    
    _this.resultsTarget = resultsTarget;
    _this.resultsTarget.on('click', '.youtube-result', _this.onResultClick);
    
    _this.getPlaylistItems();
  },
  
  previousPage: function() {
    var _this = App.YoutubePlaylistLoader;
    if ( !_this.prevPageToken ) {
      return false;
    }
    _this.params.pageToken = _this.prevPageToken;
    _this.getPlaylistItems();
  },
  
  nextPage: function() {
    var _this = App.YoutubePlaylistLoader;
    if ( !_this.nextPageToken ) {
      return false;
    }
    _this.params.pageToken = _this.nextPageToken;
    _this.getPlaylistItems();
  },
  
  getPlaylistItems: function() {
    var _this = App.YoutubePlaylistLoader;
    
    _this.resultsTarget.html('');
    
    _this.xhr && _this.xhr.abort();
    
    _this.xhr = $.ajax({
      url: _this.apiBase + '/playlistItems',
      data: _this.params,
      success: function(response) {
        
        _this.prevPageToken = response.prevPageToken;
        _this.nextPageToken = response.nextPageToken;
        
        if ( response.items ) {
          _this.processResults(response.items);
        }
      },
      error: function(xhr, errorThrown, textStatus) {
        console.log(errorThrown);
      }
    });
  },
  
  processResults: function(results) {
    var _this = App.YoutubePlaylistLoader;
    _this.results = results;
    
    var resultsHTML = '';
    
    for ( var i = 0; i < _this.results.length; i++ ) {
      var result = _this.results[i];
      resultsHTML += [
        '<a href="javascript:void(0)" data-video-id="',
          result.contentDetails.videoId,
          '" class="youtube-result">',
          '<img src=' + (
            result.snippet.thumbnails.medium ?
              result.snippet.thumbnails.medium.url :
              result.snippet.thumbnails.default.url
          ) + '>',
          '<strong>' + result.snippet.title + '</strong>',
          '<span class="clearfix"></span>',
        '</a>'
       ].join('');
    }
    
    _this.resultsTarget.html(resultsHTML);
    
  },
  
  onResultClick: function() {
    var _this = App.YoutubePlaylistLoader;
    var videoId = $(this).data('video-id');
    window.open('https://www.youtube.com/watch?v=' + videoId, '_system');
  }
  
};

$(function() {
  App.YoutubePlaylistLoader.init($('#results'));
});