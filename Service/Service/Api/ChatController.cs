using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Service.Api
{
    public class ChatController : ApiController
    {
        private static List<Message> _messages = new List<Message>();

        public IEnumerable<Message> Get()
        {
            ClearOldMessages();
            return _messages.ToArray();
        }

        public void Put(Message message)
        {
            ClearOldMessages();
            _messages.Add(message);
        }

        private void ClearOldMessages()
        {
            _messages = _messages.OrderBy(m => m.Time).Take(100).ToList();
        }
    }
}