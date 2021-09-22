@extends('layout.app')

@section('title', 'Home')

@section('content')

<div class="container-fluid">
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header text-center">
                    <h4>Laravel axios multifile loader</h4>
                </div>
                <div class="card-body">
                    <button class="btn btn-primary my-3 btn-sm addBtn">Add File</button>
                    <table class="table table-stripped">
                        <thead>
                            <tr>
                                <th>File</th>
                                <th>File Size</th>
                                <th>Cencel</th>
                                <th>Upload</th>
                                <th>Upload (MB)</th>
                                <th>Upload (%)</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody class="fileList">
                        <!-- <tr>
                            <td><input type="file" class="form-control"></td>
                            <td><h6 class="filesize">File Size</h6> </td>
                            <td><button class="btn btn-danger btn-sm cencelBtn">Cencel</button></td>
                            <td><button class="btn btn-primary btn-sm upBtn">Upload</button></td>
                            <td><h6 class="fileUpMB">Upload (MB)</h6> </td>
                            <td><h6 class="fileUpPercent">Upload (%)</h6></td>
                            <td><h6 class="fileUpStatus">Status</h6></td>
                        </tr> -->
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

@section('script')


@endsection