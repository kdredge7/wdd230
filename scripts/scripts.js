<script>
        const date = { month:'numeric', day:'numeric', year:'numeric'};
        document.getElementById('updateddate').innerHtml = date().toLocaleDateString('en-US', date);
      </script>