const { default: axios } = require("axios");

$('.addBtn').on('click', function(){
    
    let newTableRow = 
        "<tr>"+
            "<td><input type='file' class='fileInput form-control'> File</td>"+
            "<td class='filesize'>File Size</td>"+
            "<td><button class='btn btn-danger btn-sm cencelBtn'>Cencel</button></td>"+
            "<td><button class='btn btn-primary btn-sm upBtn'>Upload</button></td>"+
            "<td class='fileUpMB'>Upload (MB)</td>"+
            "<td class='fileUpPercent'>Upload (%)</h6></td>"+
            "<td class='fileUpStatus'>Status</td>"+
        "</tr>";

        $('.fileList').append(newTableRow);

        $('.fileInput').on('change', function(){
            let myFile = $(this).prop('files');
            let myFileSize = ((myFile[0].size)/(1024*1024)).toFixed(2);
            $(this).closest('tr').find('.filesize').html(myFileSize+ "MB");
        });

        $('.upBtn').on('click', function(event){
            let myFile = $(this).closest('tr').find('.fileInput').prop('files');
            let fileUpMB = $(this).closest('tr').find('.fileUpMB');
            let fileUpPercent = $(this).closest('tr').find('.fileUpPercent');
            let fileUpStatus = $(this).closest('tr').find('.fileUpStatus');
            let formaDta = new FormData();
            formaDta.append('fileKey', myFile[0]);
            onFileUpload(formaDta, fileUpMB, fileUpPercent, fileUpStatus);
            event.preventDefault();
            event.stopImmediatePropagation();
        });

        $('.cencelBtn').on('click', function(){
            $(this).parents('tr').remove();
        });  
    });

    function onFileUpload(formaDta, fileUpMB, fileUpPercent, fileUpStatus){
        let url = '/fileUp';
        let config = {
            headers: {'content-type': 'multipart/form-data'},
            onUploadProgress:function(progressEvent){
                let UpMb = (progressEvent.loaded/(1024*1024)).toFixed(2);
                let UpPercent = ((progressEvent.loaded*100)/progressEvent.total).toFixed(2);
                fileUpMB.html(UpMb);
                fileUpPercent.html(UpPercent);
            }
        }

        axios.post(url,formaDta, config)
        .then(function(response){
            if(response.data==200){
                fileUpStatus.html('Upload Complite');
            }else{
                fileUpStatus.html('Upload Failed');
            }
        })
        .catch(function(error){
            fileUpStatus.html('Upload Failed');
        });

    }