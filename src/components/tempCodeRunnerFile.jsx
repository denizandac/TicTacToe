<input
              type="text"
              required
              value={userInfo.PlayerSymbol}
              onChange={(e) =>
                setUserInfo({ ...userInfo, PlayerSymbol: e.target.value })
              }
            />