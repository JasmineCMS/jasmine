@extends('jasmine::app.layout')
@section('app')
    <file-manager-wrapper ref="fmw" id="fmw"></file-manager-wrapper>
@endsection

@push('scripts')
    <script src="https://unpkg.com/xhook@latest/dist/xhook.min.js"></script>

    <script>

        xhook.after(function (req, res) {

            if (req.url.match(/\/content/)) {
                var data = JSON.parse(res.data);

                data.files = data.files.filter(function (f) {
                    return f.extension.toLowerCase().match(window.parent.fmAllowedTypes || /.*/);
                });

                res.data = JSON.stringify(data);
                res.text = JSON.stringify(data);
            }

        });
    </script>

    <script>
        document.addEventListener('DOMContentLoaded', function () {
            // set fm height
            //document.getElementById('fm-main-block').setAttribute('style', 'height:' + window.innerHeight + 'px');

            let fm = document.getElementById('fmw').__vue__.$refs.fm;

            const FileBrowserDialogue = {
                init: function () {
                    // Here goes your code for setting your custom things onLoad.
                },
                mySubmit: function (URL) {
                    // pass selected file path to TinyMCE
                    parent.postMessage({
                        mceAction: 'insert',
                        content: URL,
                        text: URL.split('/').pop()
                    })
                    // close popup window
                    parent.postMessage({mceAction: 'close'});
                }
            };

            // Add callback to file manager
            fm.$store.commit('fm/setFileCallBack', function (fileUrl) {
                FileBrowserDialogue.mySubmit(fileUrl);
            });
        });
    </script>
@endpush
