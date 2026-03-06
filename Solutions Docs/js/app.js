/* Solutions Analyzer Interactive Docs */

$(document).ready(function() {
    // Common DataTable config
    var dtDefaults = {
        pageLength: 50,
        lengthMenu: [[25, 50, 100, -1], [25, 50, 100, "All"]],
        order: [],
        autoWidth: false,
        deferRender: true,
        stateSave: false,
        orderCellsTop: true,
        dom: '<"row"<"col-sm-6"l><"col-sm-6"f>>rtip',
        language: {
            search: "Quick filter:",
            lengthMenu: "Show _MENU_ rows",
            info: "Showing _START_-_END_ of _TOTAL_",
            emptyTable: "No matching records",
        }
    };

    // Initialize DataTables with per-column filters in header
    function initTable(tableId, extraOpts) {
        var opts = $.extend(true, {}, dtDefaults, extraOpts || {});
        opts.initComplete = function() {
            var api = this.api();
            // Add per-column search inputs in the second header row
            $('#' + tableId + ' thead tr.filters th').each(function(i) {
                var column = api.column(i);
                if ($(this).data('filter') !== false) {
                    var input = $('<input type="text" class="column-filter" placeholder="Filter...">')
                        .appendTo($(this).empty())
                        .on('keyup change clear', function() {
                            if (column.search() !== this.value) {
                                column.search(this.value).draw();
                            }
                            updateClearBtn(tableId, api);
                        });
                }
            });

            // Add "Clear All Filters" bar above the table
            var clearBar = $(
                '<div class="clear-filters-bar">' +
                '<span class="clear-label">Filters are active</span>' +
                '<button class="btn-clear-all" title="Clear all filters">✕ Clear All Filters</button>' +
                '</div>'
            );
            clearBar.find('.btn-clear-all').on('click', function() {
                api.search('');
                api.columns().every(function() { this.search(''); });
                $('#' + tableId + ' thead tr.filters input.column-filter').val('');
                $(api.table().container()).find('.dataTables_filter input').val('');
                api.draw();
                clearBar.removeClass('visible');
            });
            $(api.table().container()).prepend(clearBar);

            // Also track global search changes
            $(api.table().container()).find('.dataTables_filter input').on('keyup change clear', function() {
                updateClearBtn(tableId, api);
            });

            // Show button if any filters are active on load (from saved state)
            updateClearBtn(tableId, api);

            // Hide loading overlay
            $('#loading').fadeOut(200);
        };
        return $('#' + tableId).DataTable(opts);
    }

    // Show/hide the Clear All Filters bar based on whether any filters are active
    function updateClearBtn(tableId, api) {
        var hasFilter = !!api.search();
        if (!hasFilter) {
            api.columns().every(function() { if (this.search()) hasFilter = true; });
        }
        $(api.table().container()).find('.clear-filters-bar').toggleClass('visible', hasFilter);
    }

    // Solutions table
    if ($('#solutions-table').length) {
        initTable('solutions-table', {
            order: [[1, 'asc']],
            columnDefs: [
                { targets: 0, orderable: false, searchable: false, width: '40px' },
                { targets: [6,7,8], className: 'text-center' },
            ]
        });
    }

    // Connectors table
    if ($('#connectors-table').length) {
        initTable('connectors-table', {
            order: [[1, 'asc']],
            columnDefs: [
                { targets: 0, orderable: false, searchable: false, width: '40px' },
                { targets: [7], className: 'text-center' },
            ]
        });
    }

    // Tables table
    if ($('#tables-table').length) {
        initTable('tables-table', {
            order: [[0, 'asc']],
            columnDefs: [
                { targets: [3,4], className: 'text-center' },
            ]
        });
    }

    // Content table
    if ($('#content-table').length) {
        initTable('content-table', {
            order: [[0, 'asc']],
        });
    }

    // Parsers table
    if ($('#parsers-table').length) {
        initTable('parsers-table', {
            order: [[0, 'asc']],
        });
    }

    // ASIM table
    if ($('#asim-table').length) {
        initTable('asim-table', {
            order: [[1, 'asc'], [2, 'asc'], [0, 'asc']],
        });
    }

    // Tab switching - use Bootstrap's tab events
    $('button[data-bs-toggle="tab"]').on('shown.bs.tab', function(e) {
        // Adjust DataTable columns on tab show (fixes width issues)
        $.fn.dataTable.tables({ visible: true, api: true }).columns.adjust();
    });

    // Click-to-filter: clicking a cell value filters that column
    $(document).on('click', 'table.dataTable tbody td', function() {
        var table = $(this).closest('table').DataTable();
        var colIdx = table.cell(this).index().column;
        // Get the text content (strip HTML tags)
        var text = $(this).text().trim();
        if (!text || text === '?' || text === '0') return;
        // Don't filter on numeric-only cells or logo columns
        var th = $($(this).closest('table').find('thead tr.filters th')[colIdx]);
        if (th.data('filter') === false) return;
        // Set the column filter
        var input = th.find('input.column-filter');
        if (input.length) {
            input.val(text).trigger('change');
        }
    });
});
