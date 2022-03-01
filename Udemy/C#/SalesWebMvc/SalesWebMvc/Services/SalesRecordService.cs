using Microsoft.EntityFrameworkCore;
using SalesWebMvc.Data;
using SalesWebMvc.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SalesWebMvc.Services
{
    public class SalesRecordService
    {
        private readonly SalesWebMvcContext _context;

        public SalesRecordService(SalesWebMvcContext context)
        {
            _context = context;
        }

        public async Task<List<SalesRecord>> FindByDateAsync(DateTime? minDate, DateTime? maxDate)
        {
            var result = from salesRecord in _context.SalesRecord select salesRecord;

            if (minDate.HasValue)
            {
                result = from salesRecord in result where salesRecord.Date >= minDate select salesRecord;
            }

            if (maxDate.HasValue)
            {
                result = from salesRecord in result where salesRecord.Date <= maxDate select salesRecord;
            }

            return await result
                .Include(salesRecord => salesRecord.Seller)
                .Include(salesRecord => salesRecord.Seller.Department)
                .OrderByDescending(salesRecord => salesRecord.Date)
                .ToListAsync();
        }

        public async Task<List<IGrouping<Department, SalesRecord>>> FindByDateGroupingAsync(DateTime? minDate, DateTime? maxDate)
        {
            var result = from salesRecord in _context.SalesRecord select salesRecord;

            if (minDate.HasValue)
            {
                result = from salesRecord in result where salesRecord.Date >= minDate select salesRecord;
            }

            if (maxDate.HasValue)
            {
                result = from salesRecord in result where salesRecord.Date <= maxDate select salesRecord;
            }

            var data = result
                .Include(salesRecord => salesRecord.Seller)
                .Include(salesRecord => salesRecord.Seller.Department)
                .OrderByDescending(salesRecord => salesRecord.Date);

            return await data.GroupBy(salesRecord => salesRecord.Seller.Department).ToListAsync();
        }
    }
}
