<script>
    const date = {month:`long`, day:`numeric`, year:`numeric`};
    document.getElementById('updateddate').innerHtml = date().toLocaleDateString('en-US', date);
</script>

        